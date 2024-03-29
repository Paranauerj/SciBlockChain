// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateClient } from "./types/ibc/core/client/v1/tx";
import { MsgSubmitMisbehaviour } from "./types/ibc/core/client/v1/tx";
import { MsgCreateClient } from "./types/ibc/core/client/v1/tx";
import { MsgUpgradeClient } from "./types/ibc/core/client/v1/tx";
import { serverOptions } from "../../../../../server";


const types = [
  ["/ibc.core.client.v1.MsgUpdateClient", MsgUpdateClient],
  ["/ibc.core.client.v1.MsgSubmitMisbehaviour", MsgSubmitMisbehaviour],
  ["/ibc.core.client.v1.MsgCreateClient", MsgCreateClient],
  ["/ibc.core.client.v1.MsgUpgradeClient", MsgUpgradeClient],
  
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
    msgUpdateClient: (data: MsgUpdateClient): EncodeObject => ({ typeUrl: "/ibc.core.client.v1.MsgUpdateClient", value: data }),
    msgSubmitMisbehaviour: (data: MsgSubmitMisbehaviour): EncodeObject => ({ typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour", value: data }),
    msgCreateClient: (data: MsgCreateClient): EncodeObject => ({ typeUrl: "/ibc.core.client.v1.MsgCreateClient", value: data }),
    msgUpgradeClient: (data: MsgUpgradeClient): EncodeObject => ({ typeUrl: "/ibc.core.client.v1.MsgUpgradeClient", value: data }),
    
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
