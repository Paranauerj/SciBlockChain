package scichain

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/paranauerj/SciChain/x/scichain/keeper"
	"github.com/paranauerj/SciChain/x/scichain/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the profile
	for _, elem := range genState.ProfileList {
		k.SetProfile(ctx, *elem)
	}

	// Set profile count
	k.SetProfileCount(ctx, genState.ProfileCount)

	// Set all the article
	for _, elem := range genState.ArticleList {
		k.SetArticle(ctx, *elem)
	}

	// Set article count
	k.SetArticleCount(ctx, genState.ArticleCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all profile
	profileList := k.GetAllProfile(ctx)
	for _, elem := range profileList {
		elem := elem
		genesis.ProfileList = append(genesis.ProfileList, &elem)
	}

	// Set the current count
	genesis.ProfileCount = k.GetProfileCount(ctx)

	// Get all article
	articleList := k.GetAllArticle(ctx)
	for _, elem := range articleList {
		elem := elem
		genesis.ArticleList = append(genesis.ArticleList, &elem)
	}

	// Set the current count
	genesis.ArticleCount = k.GetArticleCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
