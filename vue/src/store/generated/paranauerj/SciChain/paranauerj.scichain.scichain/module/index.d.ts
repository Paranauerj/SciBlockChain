import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateArticle } from "./types/scichain/tx";
import { MsgUpdateProfile } from "./types/scichain/tx";
import { MsgDeleteProfile } from "./types/scichain/tx";
import { MsgCreateArticle } from "./types/scichain/tx";
import { MsgDeleteArticle } from "./types/scichain/tx";
import { MsgCreateProfile } from "./types/scichain/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateArticle: (data: MsgUpdateArticle) => EncodeObject;
    msgUpdateProfile: (data: MsgUpdateProfile) => EncodeObject;
    msgDeleteProfile: (data: MsgDeleteProfile) => EncodeObject;
    msgCreateArticle: (data: MsgCreateArticle) => EncodeObject;
    msgDeleteArticle: (data: MsgDeleteArticle) => EncodeObject;
    msgCreateProfile: (data: MsgCreateProfile) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
