import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "paranauerj.scichain.scichain";
export interface Article {
    creator: string;
    id: number;
    title: string;
    ipfs: string;
}
export declare const Article: {
    encode(message: Article, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Article;
    fromJSON(object: any): Article;
    toJSON(message: Article): unknown;
    fromPartial(object: DeepPartial<Article>): Article;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
