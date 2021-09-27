package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateArticle{}

func NewMsgCreateArticle(creator string, title string, ipfs string) *MsgCreateArticle {
	return &MsgCreateArticle{
		Creator: creator,
		Title:   title,
		Ipfs:    ipfs,
	}
}

func (msg *MsgCreateArticle) Route() string {
	return RouterKey
}

func (msg *MsgCreateArticle) Type() string {
	return "CreateArticle"
}

func (msg *MsgCreateArticle) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateArticle) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateArticle) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateArticle{}

func NewMsgUpdateArticle(creator string, id uint64, title string, ipfs string) *MsgUpdateArticle {
	return &MsgUpdateArticle{
		Id:      id,
		Creator: creator,
		Title:   title,
		Ipfs:    ipfs,
	}
}

func (msg *MsgUpdateArticle) Route() string {
	return RouterKey
}

func (msg *MsgUpdateArticle) Type() string {
	return "UpdateArticle"
}

func (msg *MsgUpdateArticle) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateArticle) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateArticle) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteArticle{}

func NewMsgDeleteArticle(creator string, id uint64) *MsgDeleteArticle {
	return &MsgDeleteArticle{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteArticle) Route() string {
	return RouterKey
}

func (msg *MsgDeleteArticle) Type() string {
	return "DeleteArticle"
}

func (msg *MsgDeleteArticle) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteArticle) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteArticle) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
