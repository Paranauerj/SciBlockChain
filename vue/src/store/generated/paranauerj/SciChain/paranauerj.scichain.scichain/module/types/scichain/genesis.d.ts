import { Writer, Reader } from 'protobufjs/minimal';
import { Profile } from '../scichain/profile';
import { Article } from '../scichain/article';
export declare const protobufPackage = "paranauerj.scichain.scichain";
/** GenesisState defines the scichain module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    profileList: Profile[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    profileCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    articleList: Article[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    articleCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
