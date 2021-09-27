package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateProfile{}, "scichain/CreateProfile", nil)
	cdc.RegisterConcrete(&MsgUpdateProfile{}, "scichain/UpdateProfile", nil)
	cdc.RegisterConcrete(&MsgDeleteProfile{}, "scichain/DeleteProfile", nil)

	cdc.RegisterConcrete(&MsgCreateArticle{}, "scichain/CreateArticle", nil)
	cdc.RegisterConcrete(&MsgUpdateArticle{}, "scichain/UpdateArticle", nil)
	cdc.RegisterConcrete(&MsgDeleteArticle{}, "scichain/DeleteArticle", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateProfile{},
		&MsgUpdateProfile{},
		&MsgDeleteProfile{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateArticle{},
		&MsgUpdateArticle{},
		&MsgDeleteArticle{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
