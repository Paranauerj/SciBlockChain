/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Profile } from '../scichain/profile'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Article } from '../scichain/article'

export const protobufPackage = 'paranauerj.scichain.scichain'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetProfileRequest {
  id: number
}

export interface QueryGetProfileResponse {
  Profile: Profile | undefined
}

export interface QueryAllProfileRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllProfileResponse {
  Profile: Profile[]
  pagination: PageResponse | undefined
}

export interface QueryGetArticleRequest {
  id: number
}

export interface QueryGetArticleResponse {
  Article: Article | undefined
}

export interface QueryAllArticleRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllArticleResponse {
  Article: Article[]
  pagination: PageResponse | undefined
}

const baseQueryGetProfileRequest: object = { id: 0 }

export const QueryGetProfileRequest = {
  encode(message: QueryGetProfileRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProfileRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetProfileRequest } as QueryGetProfileRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetProfileRequest {
    const message = { ...baseQueryGetProfileRequest } as QueryGetProfileRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetProfileRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetProfileRequest>): QueryGetProfileRequest {
    const message = { ...baseQueryGetProfileRequest } as QueryGetProfileRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetProfileResponse: object = {}

export const QueryGetProfileResponse = {
  encode(message: QueryGetProfileResponse, writer: Writer = Writer.create()): Writer {
    if (message.Profile !== undefined) {
      Profile.encode(message.Profile, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProfileResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetProfileResponse } as QueryGetProfileResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Profile = Profile.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetProfileResponse {
    const message = { ...baseQueryGetProfileResponse } as QueryGetProfileResponse
    if (object.Profile !== undefined && object.Profile !== null) {
      message.Profile = Profile.fromJSON(object.Profile)
    } else {
      message.Profile = undefined
    }
    return message
  },

  toJSON(message: QueryGetProfileResponse): unknown {
    const obj: any = {}
    message.Profile !== undefined && (obj.Profile = message.Profile ? Profile.toJSON(message.Profile) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetProfileResponse>): QueryGetProfileResponse {
    const message = { ...baseQueryGetProfileResponse } as QueryGetProfileResponse
    if (object.Profile !== undefined && object.Profile !== null) {
      message.Profile = Profile.fromPartial(object.Profile)
    } else {
      message.Profile = undefined
    }
    return message
  }
}

const baseQueryAllProfileRequest: object = {}

export const QueryAllProfileRequest = {
  encode(message: QueryAllProfileRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllProfileRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllProfileRequest } as QueryAllProfileRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllProfileRequest {
    const message = { ...baseQueryAllProfileRequest } as QueryAllProfileRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllProfileRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllProfileRequest>): QueryAllProfileRequest {
    const message = { ...baseQueryAllProfileRequest } as QueryAllProfileRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllProfileResponse: object = {}

export const QueryAllProfileResponse = {
  encode(message: QueryAllProfileResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Profile) {
      Profile.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllProfileResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllProfileResponse } as QueryAllProfileResponse
    message.Profile = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Profile.push(Profile.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllProfileResponse {
    const message = { ...baseQueryAllProfileResponse } as QueryAllProfileResponse
    message.Profile = []
    if (object.Profile !== undefined && object.Profile !== null) {
      for (const e of object.Profile) {
        message.Profile.push(Profile.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllProfileResponse): unknown {
    const obj: any = {}
    if (message.Profile) {
      obj.Profile = message.Profile.map((e) => (e ? Profile.toJSON(e) : undefined))
    } else {
      obj.Profile = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllProfileResponse>): QueryAllProfileResponse {
    const message = { ...baseQueryAllProfileResponse } as QueryAllProfileResponse
    message.Profile = []
    if (object.Profile !== undefined && object.Profile !== null) {
      for (const e of object.Profile) {
        message.Profile.push(Profile.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetArticleRequest: object = { id: 0 }

export const QueryGetArticleRequest = {
  encode(message: QueryGetArticleRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetArticleRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetArticleRequest } as QueryGetArticleRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetArticleRequest {
    const message = { ...baseQueryGetArticleRequest } as QueryGetArticleRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetArticleRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetArticleRequest>): QueryGetArticleRequest {
    const message = { ...baseQueryGetArticleRequest } as QueryGetArticleRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetArticleResponse: object = {}

export const QueryGetArticleResponse = {
  encode(message: QueryGetArticleResponse, writer: Writer = Writer.create()): Writer {
    if (message.Article !== undefined) {
      Article.encode(message.Article, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetArticleResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetArticleResponse } as QueryGetArticleResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Article = Article.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetArticleResponse {
    const message = { ...baseQueryGetArticleResponse } as QueryGetArticleResponse
    if (object.Article !== undefined && object.Article !== null) {
      message.Article = Article.fromJSON(object.Article)
    } else {
      message.Article = undefined
    }
    return message
  },

  toJSON(message: QueryGetArticleResponse): unknown {
    const obj: any = {}
    message.Article !== undefined && (obj.Article = message.Article ? Article.toJSON(message.Article) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetArticleResponse>): QueryGetArticleResponse {
    const message = { ...baseQueryGetArticleResponse } as QueryGetArticleResponse
    if (object.Article !== undefined && object.Article !== null) {
      message.Article = Article.fromPartial(object.Article)
    } else {
      message.Article = undefined
    }
    return message
  }
}

const baseQueryAllArticleRequest: object = {}

export const QueryAllArticleRequest = {
  encode(message: QueryAllArticleRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllArticleRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllArticleRequest } as QueryAllArticleRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllArticleRequest {
    const message = { ...baseQueryAllArticleRequest } as QueryAllArticleRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllArticleRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllArticleRequest>): QueryAllArticleRequest {
    const message = { ...baseQueryAllArticleRequest } as QueryAllArticleRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllArticleResponse: object = {}

export const QueryAllArticleResponse = {
  encode(message: QueryAllArticleResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Article) {
      Article.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllArticleResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllArticleResponse } as QueryAllArticleResponse
    message.Article = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Article.push(Article.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllArticleResponse {
    const message = { ...baseQueryAllArticleResponse } as QueryAllArticleResponse
    message.Article = []
    if (object.Article !== undefined && object.Article !== null) {
      for (const e of object.Article) {
        message.Article.push(Article.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllArticleResponse): unknown {
    const obj: any = {}
    if (message.Article) {
      obj.Article = message.Article.map((e) => (e ? Article.toJSON(e) : undefined))
    } else {
      obj.Article = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllArticleResponse>): QueryAllArticleResponse {
    const message = { ...baseQueryAllArticleResponse } as QueryAllArticleResponse
    message.Article = []
    if (object.Article !== undefined && object.Article !== null) {
      for (const e of object.Article) {
        message.Article.push(Article.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a profile by id. */
  Profile(request: QueryGetProfileRequest): Promise<QueryGetProfileResponse>
  /** Queries a list of profile items. */
  ProfileAll(request: QueryAllProfileRequest): Promise<QueryAllProfileResponse>
  /** Queries a article by id. */
  Article(request: QueryGetArticleRequest): Promise<QueryGetArticleResponse>
  /** Queries a list of article items. */
  ArticleAll(request: QueryAllArticleRequest): Promise<QueryAllArticleResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Profile(request: QueryGetProfileRequest): Promise<QueryGetProfileResponse> {
    const data = QueryGetProfileRequest.encode(request).finish()
    const promise = this.rpc.request('paranauerj.scichain.scichain.Query', 'Profile', data)
    return promise.then((data) => QueryGetProfileResponse.decode(new Reader(data)))
  }

  ProfileAll(request: QueryAllProfileRequest): Promise<QueryAllProfileResponse> {
    const data = QueryAllProfileRequest.encode(request).finish()
    const promise = this.rpc.request('paranauerj.scichain.scichain.Query', 'ProfileAll', data)
    return promise.then((data) => QueryAllProfileResponse.decode(new Reader(data)))
  }

  Article(request: QueryGetArticleRequest): Promise<QueryGetArticleResponse> {
    const data = QueryGetArticleRequest.encode(request).finish()
    const promise = this.rpc.request('paranauerj.scichain.scichain.Query', 'Article', data)
    return promise.then((data) => QueryGetArticleResponse.decode(new Reader(data)))
  }

  ArticleAll(request: QueryAllArticleRequest): Promise<QueryAllArticleResponse> {
    const data = QueryAllArticleRequest.encode(request).finish()
    const promise = this.rpc.request('paranauerj.scichain.scichain.Query', 'ArticleAll', data)
    return promise.then((data) => QueryAllArticleResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
