// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { serverOptions } from "../../../../../server";
const types = [
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", MsgCreateVestingAccount],
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
        msgCreateVestingAccount: (data) => ({ typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount", value: data }),
    };
};


const queryClient = async ({ addr: addr } = { addr: serverOptions.host + ":1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
