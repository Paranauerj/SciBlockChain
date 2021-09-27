package types

import (
	"fmt"
	// this line is used by starport scaffolding # ibc/genesistype/import
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # ibc/genesistype/default
		// this line is used by starport scaffolding # genesis/types/default
		ProfileList: []*Profile{},
		ArticleList: []*Article{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # ibc/genesistype/validate

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in profile
	profileIdMap := make(map[uint64]bool)

	for _, elem := range gs.ProfileList {
		if _, ok := profileIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for profile")
		}
		profileIdMap[elem.Id] = true
	}
	// Check for duplicated ID in article
	articleIdMap := make(map[uint64]bool)

	for _, elem := range gs.ArticleList {
		if _, ok := articleIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for article")
		}
		articleIdMap[elem.Id] = true
	}

	return nil
}
