/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { Profile } from '../scichain/profile';
import { Article } from '../scichain/article';
export const protobufPackage = 'paranauerj.scichain.scichain';
const baseGenesisState = { profileCount: 0, articleCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.profileList) {
            Profile.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.profileCount !== 0) {
            writer.uint32(32).uint64(message.profileCount);
        }
        for (const v of message.articleList) {
            Article.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.articleCount !== 0) {
            writer.uint32(16).uint64(message.articleCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.profileList = [];
        message.articleList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.profileList.push(Profile.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.profileCount = longToNumber(reader.uint64());
                    break;
                case 1:
                    message.articleList.push(Article.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.articleCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.profileList = [];
        message.articleList = [];
        if (object.profileList !== undefined && object.profileList !== null) {
            for (const e of object.profileList) {
                message.profileList.push(Profile.fromJSON(e));
            }
        }
        if (object.profileCount !== undefined && object.profileCount !== null) {
            message.profileCount = Number(object.profileCount);
        }
        else {
            message.profileCount = 0;
        }
        if (object.articleList !== undefined && object.articleList !== null) {
            for (const e of object.articleList) {
                message.articleList.push(Article.fromJSON(e));
            }
        }
        if (object.articleCount !== undefined && object.articleCount !== null) {
            message.articleCount = Number(object.articleCount);
        }
        else {
            message.articleCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.profileList) {
            obj.profileList = message.profileList.map((e) => (e ? Profile.toJSON(e) : undefined));
        }
        else {
            obj.profileList = [];
        }
        message.profileCount !== undefined && (obj.profileCount = message.profileCount);
        if (message.articleList) {
            obj.articleList = message.articleList.map((e) => (e ? Article.toJSON(e) : undefined));
        }
        else {
            obj.articleList = [];
        }
        message.articleCount !== undefined && (obj.articleCount = message.articleCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.profileList = [];
        message.articleList = [];
        if (object.profileList !== undefined && object.profileList !== null) {
            for (const e of object.profileList) {
                message.profileList.push(Profile.fromPartial(e));
            }
        }
        if (object.profileCount !== undefined && object.profileCount !== null) {
            message.profileCount = object.profileCount;
        }
        else {
            message.profileCount = 0;
        }
        if (object.articleList !== undefined && object.articleList !== null) {
            for (const e of object.articleList) {
                message.articleList.push(Article.fromPartial(e));
            }
        }
        if (object.articleCount !== undefined && object.articleCount !== null) {
            message.articleCount = object.articleCount;
        }
        else {
            message.articleCount = 0;
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
