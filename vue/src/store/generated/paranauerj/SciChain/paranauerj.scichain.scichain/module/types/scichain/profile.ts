/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'paranauerj.scichain.scichain'

export interface Profile {
  creator: string
  id: number
  name: string
  university: string
  link: string
  about: string
}

const baseProfile: object = { creator: '', id: 0, name: '', university: '', link: '', about: '' }

export const Profile = {
  encode(message: Profile, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.university !== '') {
      writer.uint32(34).string(message.university)
    }
    if (message.link !== '') {
      writer.uint32(42).string(message.link)
    }
    if (message.about !== '') {
      writer.uint32(50).string(message.about)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Profile {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseProfile } as Profile
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
          message.name = reader.string()
          break
        case 4:
          message.university = reader.string()
          break
        case 5:
          message.link = reader.string()
          break
        case 6:
          message.about = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Profile {
    const message = { ...baseProfile } as Profile
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.university !== undefined && object.university !== null) {
      message.university = String(object.university)
    } else {
      message.university = ''
    }
    if (object.link !== undefined && object.link !== null) {
      message.link = String(object.link)
    } else {
      message.link = ''
    }
    if (object.about !== undefined && object.about !== null) {
      message.about = String(object.about)
    } else {
      message.about = ''
    }
    return message
  },

  toJSON(message: Profile): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.name !== undefined && (obj.name = message.name)
    message.university !== undefined && (obj.university = message.university)
    message.link !== undefined && (obj.link = message.link)
    message.about !== undefined && (obj.about = message.about)
    return obj
  },

  fromPartial(object: DeepPartial<Profile>): Profile {
    const message = { ...baseProfile } as Profile
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
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.university !== undefined && object.university !== null) {
      message.university = object.university
    } else {
      message.university = ''
    }
    if (object.link !== undefined && object.link !== null) {
      message.link = object.link
    } else {
      message.link = ''
    }
    if (object.about !== undefined && object.about !== null) {
      message.about = object.about
    } else {
      message.about = ''
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
