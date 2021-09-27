import { Reader, Writer } from 'protobufjs/minimal';
import { Profile } from '../scichain/profile';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Article } from '../scichain/article';
export declare const protobufPackage = "paranauerj.scichain.scichain";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetProfileRequest {
    id: number;
}
export interface QueryGetProfileResponse {
    Profile: Profile | undefined;
}
export interface QueryAllProfileRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllProfileResponse {
    Profile: Profile[];
    pagination: PageResponse | undefined;
}
export interface QueryGetArticleRequest {
    id: number;
}
export interface QueryGetArticleResponse {
    Article: Article | undefined;
}
export interface QueryAllArticleRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllArticleResponse {
    Article: Article[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetProfileRequest: {
    encode(message: QueryGetProfileRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetProfileRequest;
    fromJSON(object: any): QueryGetProfileRequest;
    toJSON(message: QueryGetProfileRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetProfileRequest>): QueryGetProfileRequest;
};
export declare const QueryGetProfileResponse: {
    encode(message: QueryGetProfileResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetProfileResponse;
    fromJSON(object: any): QueryGetProfileResponse;
    toJSON(message: QueryGetProfileResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetProfileResponse>): QueryGetProfileResponse;
};
export declare const QueryAllProfileRequest: {
    encode(message: QueryAllProfileRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllProfileRequest;
    fromJSON(object: any): QueryAllProfileRequest;
    toJSON(message: QueryAllProfileRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllProfileRequest>): QueryAllProfileRequest;
};
export declare const QueryAllProfileResponse: {
    encode(message: QueryAllProfileResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllProfileResponse;
    fromJSON(object: any): QueryAllProfileResponse;
    toJSON(message: QueryAllProfileResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllProfileResponse>): QueryAllProfileResponse;
};
export declare const QueryGetArticleRequest: {
    encode(message: QueryGetArticleRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetArticleRequest;
    fromJSON(object: any): QueryGetArticleRequest;
    toJSON(message: QueryGetArticleRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetArticleRequest>): QueryGetArticleRequest;
};
export declare const QueryGetArticleResponse: {
    encode(message: QueryGetArticleResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetArticleResponse;
    fromJSON(object: any): QueryGetArticleResponse;
    toJSON(message: QueryGetArticleResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetArticleResponse>): QueryGetArticleResponse;
};
export declare const QueryAllArticleRequest: {
    encode(message: QueryAllArticleRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllArticleRequest;
    fromJSON(object: any): QueryAllArticleRequest;
    toJSON(message: QueryAllArticleRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllArticleRequest>): QueryAllArticleRequest;
};
export declare const QueryAllArticleResponse: {
    encode(message: QueryAllArticleResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllArticleResponse;
    fromJSON(object: any): QueryAllArticleResponse;
    toJSON(message: QueryAllArticleResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllArticleResponse>): QueryAllArticleResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a profile by id. */
    Profile(request: QueryGetProfileRequest): Promise<QueryGetProfileResponse>;
    /** Queries a list of profile items. */
    ProfileAll(request: QueryAllProfileRequest): Promise<QueryAllProfileResponse>;
    /** Queries a article by id. */
    Article(request: QueryGetArticleRequest): Promise<QueryGetArticleResponse>;
    /** Queries a list of article items. */
    ArticleAll(request: QueryAllArticleRequest): Promise<QueryAllArticleResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Profile(request: QueryGetProfileRequest): Promise<QueryGetProfileResponse>;
    ProfileAll(request: QueryAllProfileRequest): Promise<QueryAllProfileResponse>;
    Article(request: QueryGetArticleRequest): Promise<QueryGetArticleResponse>;
    ArticleAll(request: QueryAllArticleRequest): Promise<QueryAllArticleResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
