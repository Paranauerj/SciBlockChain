// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgConnectionOpenTry } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenConfirm } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenInit } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenAck } from "./types/ibc/core/connection/v1/tx";
import { serverOptions } from "../../../../../server";


const types = [
  ["/ibc.core.connection.v1.MsgConnectionOpenTry", MsgConnectionOpenTry],
  ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", MsgConnectionOpenConfirm],
  ["/ibc.core.connection.v1.MsgConnectionOpenInit", MsgConnectionOpenInit],
  ["/ibc.core.connection.v1.MsgConnectionOpenAck", MsgConnectionOpenAck],
  
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
    msgConnectionOpenTry: (data: MsgConnectionOpenTry): EncodeObject => ({ typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry", value: data }),
    msgConnectionOpenConfirm: (data: MsgConnectionOpenConfirm): EncodeObject => ({ typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm", value: data }),
    msgConnectionOpenInit: (data: MsgConnectionOpenInit): EncodeObject => ({ typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit", value: data }),
    msgConnectionOpenAck: (data: MsgConnectionOpenAck): EncodeObject => ({ typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck", value: data }),
    
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
