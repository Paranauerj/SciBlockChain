/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Profile } from '../scichain/profile'
import { Article } from '../scichain/article'

export const protobufPackage = 'paranauerj.scichain.scichain'

/** GenesisState defines the scichain module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  profileList: Profile[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  profileCount: number
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  articleList: Article[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  articleCount: number
}

const baseGenesisState: object = { profileCount: 0, articleCount: 0 }

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.profileList) {
      Profile.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    if (message.profileCount !== 0) {
      writer.uint32(32).uint64(message.profileCount)
    }
    for (const v of message.articleList) {
      Article.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.articleCount !== 0) {
      writer.uint32(16).uint64(message.articleCount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.profileList = []
    message.articleList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 3:
          message.profileList.push(Profile.decode(reader, reader.uint32()))
          break
        case 4:
          message.profileCount = longToNumber(reader.uint64() as Long)
          break
        case 1:
          message.articleList.push(Article.decode(reader, reader.uint32()))
          break
        case 2:
          message.articleCount = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.profileList = []
    message.articleList = []
    if (object.profileList !== undefined && object.profileList !== null) {
      for (const e of object.profileList) {
        message.profileList.push(Profile.fromJSON(e))
      }
    }
    if (object.profileCount !== undefined && object.profileCount !== null) {
      message.profileCount = Number(object.profileCount)
    } else {
      message.profileCount = 0
    }
    if (object.articleList !== undefined && object.articleList !== null) {
      for (const e of object.articleList) {
        message.articleList.push(Article.fromJSON(e))
      }
    }
    if (object.articleCount !== undefined && object.articleCount !== null) {
      message.articleCount = Number(object.articleCount)
    } else {
      message.articleCount = 0
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.profileList) {
      obj.profileList = message.profileList.map((e) => (e ? Profile.toJSON(e) : undefined))
    } else {
      obj.profileList = []
    }
    message.profileCount !== undefined && (obj.profileCount = message.profileCount)
    if (message.articleList) {
      obj.articleList = message.articleList.map((e) => (e ? Article.toJSON(e) : undefined))
    } else {
      obj.articleList = []
    }
    message.articleCount !== undefined && (obj.articleCount = message.articleCount)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.profileList = []
    message.articleList = []
    if (object.profileList !== undefined && object.profileList !== null) {
      for (const e of object.profileList) {
        message.profileList.push(Profile.fromPartial(e))
      }
    }
    if (object.profileCount !== undefined && object.profileCount !== null) {
      message.profileCount = object.profileCount
    } else {
      message.profileCount = 0
    }
    if (object.articleList !== undefined && object.articleList !== null) {
      for (const e of object.articleList) {
        message.articleList.push(Article.fromPartial(e))
      }
    }
    if (object.articleCount !== undefined && object.articleCount !== null) {
      message.articleCount = object.articleCount
    } else {
      message.articleCount = 0
    }
    return message
  }
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
