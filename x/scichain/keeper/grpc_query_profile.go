package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/paranauerj/SciChain/x/scichain/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ProfileAll(c context.Context, req *types.QueryAllProfileRequest) (*types.QueryAllProfileResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var profiles []*types.Profile
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	profileStore := prefix.NewStore(store, types.KeyPrefix(types.ProfileKey))

	pageRes, err := query.Paginate(profileStore, req.Pagination, func(key []byte, value []byte) error {
		var profile types.Profile
		if err := k.cdc.UnmarshalBinaryBare(value, &profile); err != nil {
			return err
		}

		profiles = append(profiles, &profile)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllProfileResponse{Profile: profiles, Pagination: pageRes}, nil
}

func (k Keeper) Profile(c context.Context, req *types.QueryGetProfileRequest) (*types.QueryGetProfileResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var profile types.Profile
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasProfile(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfileKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetProfileIDBytes(req.Id)), &profile)

	return &types.QueryGetProfileResponse{Profile: &profile}, nil
}
