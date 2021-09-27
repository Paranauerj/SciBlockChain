/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Profile } from '../scichain/profile';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Article } from '../scichain/article';
export const protobufPackage = 'paranauerj.scichain.scichain';
const baseQueryGetProfileRequest = { id: 0 };
export const QueryGetProfileRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetProfileRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetProfileRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetProfileRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetProfileResponse = {};
export const QueryGetProfileResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Profile !== undefined) {
            Profile.encode(message.Profile, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetProfileResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Profile = Profile.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetProfileResponse };
        if (object.Profile !== undefined && object.Profile !== null) {
            message.Profile = Profile.fromJSON(object.Profile);
        }
        else {
            message.Profile = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Profile !== undefined && (obj.Profile = message.Profile ? Profile.toJSON(message.Profile) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetProfileResponse };
        if (object.Profile !== undefined && object.Profile !== null) {
            message.Profile = Profile.fromPartial(object.Profile);
        }
        else {
            message.Profile = undefined;
        }
        return message;
    }
};
const baseQueryAllProfileRequest = {};
export const QueryAllProfileRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllProfileRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllProfileRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllProfileRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllProfileResponse = {};
export const QueryAllProfileResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Profile) {
            Profile.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllProfileResponse };
        message.Profile = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Profile.push(Profile.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllProfileResponse };
        message.Profile = [];
        if (object.Profile !== undefined && object.Profile !== null) {
            for (const e of object.Profile) {
                message.Profile.push(Profile.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Profile) {
            obj.Profile = message.Profile.map((e) => (e ? Profile.toJSON(e) : undefined));
        }
        else {
            obj.Profile = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllProfileResponse };
        message.Profile = [];
        if (object.Profile !== undefined && object.Profile !== null) {
            for (const e of object.Profile) {
                message.Profile.push(Profile.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetArticleRequest = { id: 0 };
export const QueryGetArticleRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetArticleRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetArticleRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetArticleRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetArticleResponse = {};
export const QueryGetArticleResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Article !== undefined) {
            Article.encode(message.Article, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetArticleResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Article = Article.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetArticleResponse };
        if (object.Article !== undefined && object.Article !== null) {
            message.Article = Article.fromJSON(object.Article);
        }
        else {
            message.Article = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Article !== undefined && (obj.Article = message.Article ? Article.toJSON(message.Article) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetArticleResponse };
        if (object.Article !== undefined && object.Article !== null) {
            message.Article = Article.fromPartial(object.Article);
        }
        else {
            message.Article = undefined;
        }
        return message;
    }
};
const baseQueryAllArticleRequest = {};
export const QueryAllArticleRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllArticleRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllArticleRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllArticleRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllArticleResponse = {};
export const QueryAllArticleResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Article) {
            Article.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllArticleResponse };
        message.Article = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Article.push(Article.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllArticleResponse };
        message.Article = [];
        if (object.Article !== undefined && object.Article !== null) {
            for (const e of object.Article) {
                message.Article.push(Article.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Article) {
            obj.Article = message.Article.map((e) => (e ? Article.toJSON(e) : undefined));
        }
        else {
            obj.Article = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllArticleResponse };
        message.Article = [];
        if (object.Article !== undefined && object.Article !== null) {
            for (const e of object.Article) {
                message.Article.push(Article.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Profile(request) {
        const data = QueryGetProfileRequest.encode(request).finish();
        const promise = this.rpc.request('paranauerj.scichain.scichain.Query', 'Profile', data);
        return promise.then((data) => QueryGetProfileResponse.decode(new Reader(data)));
    }
    ProfileAll(request) {
        const data = QueryAllProfileRequest.encode(request).finish();
        const promise = this.rpc.request('paranauerj.scichain.scichain.Query', 'ProfileAll', data);
        return promise.then((data) => QueryAllProfileResponse.decode(new Reader(data)));
    }
    Article(request) {
        const data = QueryGetArticleRequest.encode(request).finish();
        const promise = this.rpc.request('paranauerj.scichain.scichain.Query', 'Article', data);
        return promise.then((data) => QueryGetArticleResponse.decode(new Reader(data)));
    }
    ArticleAll(request) {
        const data = QueryAllArticleRequest.encode(request).finish();
        const promise = this.rpc.request('paranauerj.scichain.scichain.Query', 'ArticleAll', data);
        return promise.then((data) => QueryAllArticleResponse.decode(new Reader(data)));
    }
}
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
