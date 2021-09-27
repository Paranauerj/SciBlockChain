import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "paranauerj.scichain.scichain";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateProfile {
    creator: string;
    name: string;
    university: string;
    link: string;
    about: string;
}
export interface MsgCreateProfileResponse {
    id: number;
}
export interface MsgUpdateProfile {
    creator: string;
    id: number;
    name: string;
    university: string;
    link: string;
    about: string;
}
export interface MsgUpdateProfileResponse {
}
export interface MsgDeleteProfile {
    creator: string;
    id: number;
}
export interface MsgDeleteProfileResponse {
}
export interface MsgCreateArticle {
    creator: string;
    title: string;
    ipfs: string;
}
export interface MsgCreateArticleResponse {
    id: number;
}
export interface MsgUpdateArticle {
    creator: string;
    id: number;
    title: string;
    ipfs: string;
}
export interface MsgUpdateArticleResponse {
}
export interface MsgDeleteArticle {
    creator: string;
    id: number;
}
export interface MsgDeleteArticleResponse {
}
export declare const MsgCreateProfile: {
    encode(message: MsgCreateProfile, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateProfile;
    fromJSON(object: any): MsgCreateProfile;
    toJSON(message: MsgCreateProfile): unknown;
    fromPartial(object: DeepPartial<MsgCreateProfile>): MsgCreateProfile;
};
export declare const MsgCreateProfileResponse: {
    encode(message: MsgCreateProfileResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateProfileResponse;
    fromJSON(object: any): MsgCreateProfileResponse;
    toJSON(message: MsgCreateProfileResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateProfileResponse>): MsgCreateProfileResponse;
};
export declare const MsgUpdateProfile: {
    encode(message: MsgUpdateProfile, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateProfile;
    fromJSON(object: any): MsgUpdateProfile;
    toJSON(message: MsgUpdateProfile): unknown;
    fromPartial(object: DeepPartial<MsgUpdateProfile>): MsgUpdateProfile;
};
export declare const MsgUpdateProfileResponse: {
    encode(_: MsgUpdateProfileResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateProfileResponse;
    fromJSON(_: any): MsgUpdateProfileResponse;
    toJSON(_: MsgUpdateProfileResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateProfileResponse>): MsgUpdateProfileResponse;
};
export declare const MsgDeleteProfile: {
    encode(message: MsgDeleteProfile, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteProfile;
    fromJSON(object: any): MsgDeleteProfile;
    toJSON(message: MsgDeleteProfile): unknown;
    fromPartial(object: DeepPartial<MsgDeleteProfile>): MsgDeleteProfile;
};
export declare const MsgDeleteProfileResponse: {
    encode(_: MsgDeleteProfileResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteProfileResponse;
    fromJSON(_: any): MsgDeleteProfileResponse;
    toJSON(_: MsgDeleteProfileResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteProfileResponse>): MsgDeleteProfileResponse;
};
export declare const MsgCreateArticle: {
    encode(message: MsgCreateArticle, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateArticle;
    fromJSON(object: any): MsgCreateArticle;
    toJSON(message: MsgCreateArticle): unknown;
    fromPartial(object: DeepPartial<MsgCreateArticle>): MsgCreateArticle;
};
export declare const MsgCreateArticleResponse: {
    encode(message: MsgCreateArticleResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateArticleResponse;
    fromJSON(object: any): MsgCreateArticleResponse;
    toJSON(message: MsgCreateArticleResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateArticleResponse>): MsgCreateArticleResponse;
};
export declare const MsgUpdateArticle: {
    encode(message: MsgUpdateArticle, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateArticle;
    fromJSON(object: any): MsgUpdateArticle;
    toJSON(message: MsgUpdateArticle): unknown;
    fromPartial(object: DeepPartial<MsgUpdateArticle>): MsgUpdateArticle;
};
export declare const MsgUpdateArticleResponse: {
    encode(_: MsgUpdateArticleResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateArticleResponse;
    fromJSON(_: any): MsgUpdateArticleResponse;
    toJSON(_: MsgUpdateArticleResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateArticleResponse>): MsgUpdateArticleResponse;
};
export declare const MsgDeleteArticle: {
    encode(message: MsgDeleteArticle, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteArticle;
    fromJSON(object: any): MsgDeleteArticle;
    toJSON(message: MsgDeleteArticle): unknown;
    fromPartial(object: DeepPartial<MsgDeleteArticle>): MsgDeleteArticle;
};
export declare const MsgDeleteArticleResponse: {
    encode(_: MsgDeleteArticleResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteArticleResponse;
    fromJSON(_: any): MsgDeleteArticleResponse;
    toJSON(_: MsgDeleteArticleResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteArticleResponse>): MsgDeleteArticleResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateProfile(request: MsgCreateProfile): Promise<MsgCreateProfileResponse>;
    UpdateProfile(request: MsgUpdateProfile): Promise<MsgUpdateProfileResponse>;
    DeleteProfile(request: MsgDeleteProfile): Promise<MsgDeleteProfileResponse>;
    CreateArticle(request: MsgCreateArticle): Promise<MsgCreateArticleResponse>;
    UpdateArticle(request: MsgUpdateArticle): Promise<MsgUpdateArticleResponse>;
    DeleteArticle(request: MsgDeleteArticle): Promise<MsgDeleteArticleResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateProfile(request: MsgCreateProfile): Promise<MsgCreateProfileResponse>;
    UpdateProfile(request: MsgUpdateProfile): Promise<MsgUpdateProfileResponse>;
    DeleteProfile(request: MsgDeleteProfile): Promise<MsgDeleteProfileResponse>;
    CreateArticle(request: MsgCreateArticle): Promise<MsgCreateArticleResponse>;
    UpdateArticle(request: MsgUpdateArticle): Promise<MsgUpdateArticleResponse>;
    DeleteArticle(request: MsgDeleteArticle): Promise<MsgDeleteArticleResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
