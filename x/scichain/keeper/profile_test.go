package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/paranauerj/SciChain/x/scichain/types"
	"github.com/stretchr/testify/assert"
)

func createNProfile(keeper *Keeper, ctx sdk.Context, n int) []types.Profile {
	items := make([]types.Profile, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendProfile(ctx, items[i])
	}
	return items
}

func TestProfileGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNProfile(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetProfile(ctx, item.Id))
	}
}

func TestProfileExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNProfile(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasProfile(ctx, item.Id))
	}
}

func TestProfileRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNProfile(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveProfile(ctx, item.Id)
		assert.False(t, keeper.HasProfile(ctx, item.Id))
	}
}

func TestProfileGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNProfile(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllProfile(ctx))
}

func TestProfileCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNProfile(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetProfileCount(ctx))
}
