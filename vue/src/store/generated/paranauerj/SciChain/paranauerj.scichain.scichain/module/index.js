// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateArticle } from "./types/scichain/tx";
import { MsgUpdateProfile } from "./types/scichain/tx";
import { MsgDeleteProfile } from "./types/scichain/tx";
import { MsgCreateArticle } from "./types/scichain/tx";
import { MsgDeleteArticle } from "./types/scichain/tx";
import { MsgCreateProfile } from "./types/scichain/tx";
import { serverOptions } from "../../../../../server";
const types = [
    ["/paranauerj.scichain.scichain.MsgUpdateArticle", MsgUpdateArticle],
    ["/paranauerj.scichain.scichain.MsgUpdateProfile", MsgUpdateProfile],
    ["/paranauerj.scichain.scichain.MsgDeleteProfile", MsgDeleteProfile],
    ["/paranauerj.scichain.scichain.MsgCreateArticle", MsgCreateArticle],
    ["/paranauerj.scichain.scichain.MsgDeleteArticle", MsgDeleteArticle],
    ["/paranauerj.scichain.scichain.MsgCreateProfile", MsgCreateProfile],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: serverOptions.host + ":26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgUpdateArticle: (data) => ({ typeUrl: "/paranauerj.scichain.scichain.MsgUpdateArticle", value: data }),
        msgUpdateProfile: (data) => ({ typeUrl: "/paranauerj.scichain.scichain.MsgUpdateProfile", value: data }),
        msgDeleteProfile: (data) => ({ typeUrl: "/paranauerj.scichain.scichain.MsgDeleteProfile", value: data }),
        msgCreateArticle: (data) => ({ typeUrl: "/paranauerj.scichain.scichain.MsgCreateArticle", value: data }),
        msgDeleteArticle: (data) => ({ typeUrl: "/paranauerj.scichain.scichain.MsgDeleteArticle", value: data }),
        msgCreateProfile: (data) => ({ typeUrl: "/paranauerj.scichain.scichain.MsgCreateProfile", value: data }),
    };
};


const queryClient = async ({ addr: addr } = { addr: serverOptions.host + ":1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
