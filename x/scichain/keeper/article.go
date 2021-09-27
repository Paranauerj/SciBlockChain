package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/paranauerj/SciChain/x/scichain/types"
	"strconv"
)

// GetArticleCount get the total number of TypeName.LowerCamel
func (k Keeper) GetArticleCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ArticleCountKey))
	byteKey := types.KeyPrefix(types.ArticleCountKey)
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

// SetArticleCount set the total number of article
func (k Keeper) SetArticleCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ArticleCountKey))
	byteKey := types.KeyPrefix(types.ArticleCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendArticle appends a article in the store with a new id and update the count
func (k Keeper) AppendArticle(
	ctx sdk.Context,
	article types.Article,
) uint64 {
	// Create the article
	count := k.GetArticleCount(ctx)

	// Set the ID of the appended value
	article.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ArticleKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&article)
	store.Set(GetArticleIDBytes(article.Id), appendedValue)

	// Update article count
	k.SetArticleCount(ctx, count+1)

	return count
}

// SetArticle set a specific article in the store
func (k Keeper) SetArticle(ctx sdk.Context, article types.Article) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ArticleKey))
	b := k.cdc.MustMarshalBinaryBare(&article)
	store.Set(GetArticleIDBytes(article.Id), b)
}

// GetArticle returns a article from its id
func (k Keeper) GetArticle(ctx sdk.Context, id uint64) types.Article {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ArticleKey))
	var article types.Article
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetArticleIDBytes(id)), &article)
	return article
}

// HasArticle checks if the article exists in the store
func (k Keeper) HasArticle(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ArticleKey))
	return store.Has(GetArticleIDBytes(id))
}

// GetArticleOwner returns the creator of the
func (k Keeper) GetArticleOwner(ctx sdk.Context, id uint64) string {
	return k.GetArticle(ctx, id).Creator
}

// RemoveArticle removes a article from the store
func (k Keeper) RemoveArticle(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ArticleKey))
	store.Delete(GetArticleIDBytes(id))
}

// GetAllArticle returns all article
func (k Keeper) GetAllArticle(ctx sdk.Context) (list []types.Article) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ArticleKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Article
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetArticleIDBytes returns the byte representation of the ID
func GetArticleIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetArticleIDFromBytes returns ID in uint64 format from a byte array
func GetArticleIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
