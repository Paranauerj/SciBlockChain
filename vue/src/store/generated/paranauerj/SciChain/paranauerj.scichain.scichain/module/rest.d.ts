export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
export interface ScichainArticle {
    creator?: string;
    /** @format uint64 */
    id?: string;
    title?: string;
    ipfs?: string;
}
export interface ScichainMsgCreateArticleResponse {
    /** @format uint64 */
    id?: string;
}
export interface ScichainMsgCreateProfileResponse {
    /** @format uint64 */
    id?: string;
}
export declare type ScichainMsgDeleteArticleResponse = object;
export declare type ScichainMsgDeleteProfileResponse = object;
export declare type ScichainMsgUpdateArticleResponse = object;
export declare type ScichainMsgUpdateProfileResponse = object;
export interface ScichainProfile {
    creator?: string;
    /** @format uint64 */
    id?: string;
    name?: string;
    university?: string;
    link?: string;
    about?: string;
}
export interface ScichainQueryAllArticleResponse {
    Article?: ScichainArticle[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface ScichainQueryAllProfileResponse {
    Profile?: ScichainProfile[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface ScichainQueryGetArticleResponse {
    Article?: ScichainArticle;
}
export interface ScichainQueryGetProfileResponse {
    Profile?: ScichainProfile;
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title scichain/article.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryArticleAll
     * @summary Queries a list of article items.
     * @request GET:/paranauerj/scichain/scichain/article
     */
    queryArticleAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<ScichainQueryAllArticleResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryArticle
     * @summary Queries a article by id.
     * @request GET:/paranauerj/scichain/scichain/article/{id}
     */
    queryArticle: (id: string, params?: RequestParams) => Promise<HttpResponse<ScichainQueryGetArticleResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryProfileAll
     * @summary Queries a list of profile items.
     * @request GET:/paranauerj/scichain/scichain/profile
     */
    queryProfileAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<ScichainQueryAllProfileResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryProfile
     * @summary Queries a profile by id.
     * @request GET:/paranauerj/scichain/scichain/profile/{id}
     */
    queryProfile: (id: string, params?: RequestParams) => Promise<HttpResponse<ScichainQueryGetProfileResponse, RpcStatus>>;
}
export {};
