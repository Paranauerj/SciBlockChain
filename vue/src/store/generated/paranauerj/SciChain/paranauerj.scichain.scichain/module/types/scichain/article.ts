/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'paranauerj.scichain.scichain'

export interface Article {
  creator: string
  id: number
  title: string
  ipfs: string
}

const baseArticle: object = { creator: '', id: 0, title: '', ipfs: '' }

export const Article = {
  encode(message: Article, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.title !== '') {
      writer.uint32(26).string(message.title)
    }
    if (message.ipfs !== '') {
      writer.uint32(34).string(message.ipfs)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Article {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseArticle } as Article
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.title = reader.string()
          break
        case 4:
          message.ipfs = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Article {
    const message = { ...baseArticle } as Article
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title)
    } else {
      message.title = ''
    }
    if (object.ipfs !== undefined && object.ipfs !== null) {
      message.ipfs = String(object.ipfs)
    } else {
      message.ipfs = ''
    }
    return message
  },

  toJSON(message: Article): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.title !== undefined && (obj.title = message.title)
    message.ipfs !== undefined && (obj.ipfs = message.ipfs)
    return obj
  },

  fromPartial(object: DeepPartial<Article>): Article {
    const message = { ...baseArticle } as Article
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title
    } else {
      message.title = ''
    }
    if (object.ipfs !== undefined && object.ipfs !== null) {
      message.ipfs = object.ipfs
    } else {
      message.ipfs = ''
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
