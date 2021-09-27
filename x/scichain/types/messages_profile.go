package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateProfile{}

func NewMsgCreateProfile(creator string, name string, university string, link string, about string) *MsgCreateProfile {
	return &MsgCreateProfile{
		Creator:    creator,
		Name:       name,
		University: university,
		Link:       link,
		About:      about,
	}
}

func (msg *MsgCreateProfile) Route() string {
	return RouterKey
}

func (msg *MsgCreateProfile) Type() string {
	return "CreateProfile"
}

func (msg *MsgCreateProfile) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateProfile) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateProfile) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateProfile{}

func NewMsgUpdateProfile(creator string, id uint64, name string, university string, link string, about string) *MsgUpdateProfile {
	return &MsgUpdateProfile{
		Id:         id,
		Creator:    creator,
		Name:       name,
		University: university,
		Link:       link,
		About:      about,
	}
}

func (msg *MsgUpdateProfile) Route() string {
	return RouterKey
}

func (msg *MsgUpdateProfile) Type() string {
	return "UpdateProfile"
}

func (msg *MsgUpdateProfile) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateProfile) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateProfile) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteProfile{}

func NewMsgDeleteProfile(creator string, id uint64) *MsgDeleteProfile {
	return &MsgDeleteProfile{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteProfile) Route() string {
	return RouterKey
}

func (msg *MsgDeleteProfile) Type() string {
	return "DeleteProfile"
}

func (msg *MsgDeleteProfile) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteProfile) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteProfile) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
