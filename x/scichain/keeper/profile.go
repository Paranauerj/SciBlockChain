package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/paranauerj/SciChain/x/scichain/types"
	"strconv"
)

// GetProfileCount get the total number of TypeName.LowerCamel
func (k Keeper) GetProfileCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfileCountKey))
	byteKey := types.KeyPrefix(types.ProfileCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to uint64
		panic("cannot decode count")
	}

	return count
}

// SetProfileCount set the total number of profile
func (k Keeper) SetProfileCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfileCountKey))
	byteKey := types.KeyPrefix(types.ProfileCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendProfile appends a profile in the store with a new id and update the count
func (k Keeper) AppendProfile(
	ctx sdk.Context,
	profile types.Profile,
) uint64 {
	// Create the profile
	count := k.GetProfileCount(ctx)

	// Set the ID of the appended value
	profile.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfileKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&profile)
	store.Set(GetProfileIDBytes(profile.Id), appendedValue)

	// Update profile count
	k.SetProfileCount(ctx, count+1)

	return count
}

// SetProfile set a specific profile in the store
func (k Keeper) SetProfile(ctx sdk.Context, profile types.Profile) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfileKey))
	b := k.cdc.MustMarshalBinaryBare(&profile)
	store.Set(GetProfileIDBytes(profile.Id), b)
}

// GetProfile returns a profile from its id
func (k Keeper) GetProfile(ctx sdk.Context, id uint64) types.Profile {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfileKey))
	var profile types.Profile
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetProfileIDBytes(id)), &profile)
	return profile
}

// HasProfile checks if the profile exists in the store
func (k Keeper) HasProfile(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfileKey))
	return store.Has(GetProfileIDBytes(id))
}

// GetProfileOwner returns the creator of the
func (k Keeper) GetProfileOwner(ctx sdk.Context, id uint64) string {
	return k.GetProfile(ctx, id).Creator
}

// RemoveProfile removes a profile from the store
func (k Keeper) RemoveProfile(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfileKey))
	store.Delete(GetProfileIDBytes(id))
}

// GetAllProfile returns all profile
func (k Keeper) GetAllProfile(ctx sdk.Context) (list []types.Profile) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfileKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Profile
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetProfileIDBytes returns the byte representation of the ID
func GetProfileIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetProfileIDFromBytes returns ID in uint64 format from a byte array
func GetProfileIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
