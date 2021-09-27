package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/ipfs/go-cid"
	"github.com/paranauerj/SciChain/x/scichain/types"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) CreateArticle(goCtx context.Context, msg *types.MsgCreateArticle) (*types.MsgCreateArticleResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Minha lógica
	// Verify if the cid is valid
	if _, err := cid.Decode(msg.Ipfs); err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid CID")
	}

	// Logic to not upload the same IPFS
	articlesList := k.GetAllArticle(ctx)
	for _, existingArticle := range articlesList {
		if msg.Ipfs == existingArticle.Ipfs {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "IPFS already registered")
		}
	}

	// tutorial - Pay 5cto fee
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	feeCoins, err := sdk.ParseCoinsNormalized("5cto")
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

	// ...

	var article = types.Article{
		Creator: msg.Creator,
		Title:   msg.Title,
		Ipfs:    msg.Ipfs,
	}

	id := k.AppendArticle(
		ctx,
		article,
	)

	return &types.MsgCreateArticleResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateArticle(goCtx context.Context, msg *types.MsgUpdateArticle) (*types.MsgUpdateArticleResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var article = types.Article{
		Creator: msg.Creator,
		Id:      msg.Id,
		Title:   msg.Title,
		Ipfs:    msg.Ipfs,
	}

	// Checks that the element exists
	if !k.HasArticle(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetArticleOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetArticle(ctx, article)

	return &types.MsgUpdateArticleResponse{}, nil
}

func (k msgServer) DeleteArticle(goCtx context.Context, msg *types.MsgDeleteArticle) (*types.MsgDeleteArticleResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasArticle(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetArticleOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveArticle(ctx, msg.Id)

	return &types.MsgDeleteArticleResponse{}, nil
}
