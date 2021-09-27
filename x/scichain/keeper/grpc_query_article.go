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

func (k Keeper) ArticleAll(c context.Context, req *types.QueryAllArticleRequest) (*types.QueryAllArticleResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var articles []*types.Article
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	articleStore := prefix.NewStore(store, types.KeyPrefix(types.ArticleKey))

	pageRes, err := query.Paginate(articleStore, req.Pagination, func(key []byte, value []byte) error {
		var article types.Article
		if err := k.cdc.UnmarshalBinaryBare(value, &article); err != nil {
			return err
		}

		articles = append(articles, &article)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllArticleResponse{Article: articles, Pagination: pageRes}, nil
}

func (k Keeper) Article(c context.Context, req *types.QueryGetArticleRequest) (*types.QueryGetArticleResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var article types.Article
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasArticle(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ArticleKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetArticleIDBytes(req.Id)), &article)

	return &types.QueryGetArticleResponse{Article: &article}, nil
}
