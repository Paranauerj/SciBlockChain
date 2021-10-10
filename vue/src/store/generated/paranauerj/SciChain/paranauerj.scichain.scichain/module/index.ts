// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
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

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: serverOptions.host + ":26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgUpdateArticle: (data: MsgUpdateArticle): EncodeObject => ({ typeUrl: "/paranauerj.scichain.scichain.MsgUpdateArticle", value: data }),
    msgUpdateProfile: (data: MsgUpdateProfile): EncodeObject => ({ typeUrl: "/paranauerj.scichain.scichain.MsgUpdateProfile", value: data }),
    msgDeleteProfile: (data: MsgDeleteProfile): EncodeObject => ({ typeUrl: "/paranauerj.scichain.scichain.MsgDeleteProfile", value: data }),
    msgCreateArticle: (data: MsgCreateArticle): EncodeObject => ({ typeUrl: "/paranauerj.scichain.scichain.MsgCreateArticle", value: data }),
    msgDeleteArticle: (data: MsgDeleteArticle): EncodeObject => ({ typeUrl: "/paranauerj.scichain.scichain.MsgDeleteArticle", value: data }),
    msgCreateProfile: (data: MsgCreateProfile): EncodeObject => ({ typeUrl: "/paranauerj.scichain.scichain.MsgCreateProfile", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}


const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: serverOptions.host + ":1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
