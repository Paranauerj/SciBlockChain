package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/paranauerj/SciChain/x/scichain/types"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) CreateProfile(goCtx context.Context, msg *types.MsgCreateProfile) (*types.MsgCreateProfileResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks if the user is already registered
	profilesList := k.GetAllProfile(ctx)
	for _, existingProfile := range profilesList {
		if msg.Creator == existingProfile.Creator {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "profile already registered")
		}
	}

	// tutorial - Pay 15cto fee
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	feeCoins, err := sdk.ParseCoinsNormalized("15cto")
	if err != nil {
		return nil, err
	}

	creatorAddress, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}
	if err := k.bankKeeper.SendCoins(ctx, creatorAddress, moduleAcct, feeCoins); err != nil {
		return nil, err
	}

	// Finally

	var profile = types.Profile{
		Creator:    msg.Creator,
		Name:       msg.Name,
		University: msg.University,
		Link:       msg.Link,
		About:      msg.About,
	}

	id := k.AppendProfile(
		ctx,
		profile,
	)

	return &types.MsgCreateProfileResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateProfile(goCtx context.Context, msg *types.MsgUpdateProfile) (*types.MsgUpdateProfileResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var profile = types.Profile{
		Creator:    msg.Creator,
		Id:         msg.Id,
		Name:       msg.Name,
		University: msg.University,
		Link:       msg.Link,
		About:      msg.About,
	}

	// Checks that the element exists
	if !k.HasProfile(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetProfileOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetProfile(ctx, profile)

	return &types.MsgUpdateProfileResponse{}, nil
}

func (k msgServer) DeleteProfile(goCtx context.Context, msg *types.MsgDeleteProfile) (*types.MsgDeleteProfileResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasProfile(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetProfileOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveProfile(ctx, msg.Id)

	return &types.MsgDeleteProfileResponse{}, nil
}
