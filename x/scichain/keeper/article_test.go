package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/paranauerj/SciChain/x/scichain/types"
	"github.com/stretchr/testify/assert"
)

func createNArticle(keeper *Keeper, ctx sdk.Context, n int) []types.Article {
	items := make([]types.Article, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendArticle(ctx, items[i])
	}
	return items
}

func TestArticleGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNArticle(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetArticle(ctx, item.Id))
	}
}

func TestArticleExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNArticle(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasArticle(ctx, item.Id))
	}
}

func TestArticleRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNArticle(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveArticle(ctx, item.Id)
		assert.False(t, keeper.HasArticle(ctx, item.Id))
	}
}

func TestArticleGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNArticle(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllArticle(ctx))
}

func TestArticleCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNArticle(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetArticleCount(ctx))
}
