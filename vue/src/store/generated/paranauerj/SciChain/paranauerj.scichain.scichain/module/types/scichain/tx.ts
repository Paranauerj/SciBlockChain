/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'paranauerj.scichain.scichain'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateProfile {
  creator: string
  name: string
  university: string
  link: string
  about: string
}

export interface MsgCreateProfileResponse {
  id: number
}

export interface MsgUpdateProfile {
  creator: string
  id: number
  name: string
  university: string
  link: string
  about: string
}

export interface MsgUpdateProfileResponse {}

export interface MsgDeleteProfile {
  creator: string
  id: number
}

export interface MsgDeleteProfileResponse {}

export interface MsgCreateArticle {
  creator: string
  title: string
  ipfs: string
}

export interface MsgCreateArticleResponse {
  id: number
}

export interface MsgUpdateArticle {
  creator: string
  id: number
  title: string
  ipfs: string
}

export interface MsgUpdateArticleResponse {}

export interface MsgDeleteArticle {
  creator: string
  id: number
}

export interface MsgDeleteArticleResponse {}

const baseMsgCreateProfile: object = { creator: '', name: '', university: '', link: '', about: '' }

export const MsgCreateProfile = {
  encode(message: MsgCreateProfile, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.university !== '') {
      writer.uint32(26).string(message.university)
    }
    if (message.link !== '') {
      writer.uint32(34).string(message.link)
    }
    if (message.about !== '') {
      writer.uint32(42).string(message.about)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateProfile {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateProfile } as MsgCreateProfile
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.university = reader.string()
          break
        case 4:
          message.link = reader.string()
          break
        case 5:
          message.about = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateProfile {
    const message = { ...baseMsgCreateProfile } as MsgCreateProfile
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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

  toJSON(message: MsgCreateProfile): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    message.university !== undefined && (obj.university = message.university)
    message.link !== undefined && (obj.link = message.link)
    message.about !== undefined && (obj.about = message.about)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateProfile>): MsgCreateProfile {
    const message = { ...baseMsgCreateProfile } as MsgCreateProfile
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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

const baseMsgCreateProfileResponse: object = { id: 0 }

export const MsgCreateProfileResponse = {
  encode(message: MsgCreateProfileResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateProfileResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateProfileResponse } as MsgCreateProfileResponse
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

  fromJSON(object: any): MsgCreateProfileResponse {
    const message = { ...baseMsgCreateProfileResponse } as MsgCreateProfileResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateProfileResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateProfileResponse>): MsgCreateProfileResponse {
    const message = { ...baseMsgCreateProfileResponse } as MsgCreateProfileResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateProfile: object = { creator: '', id: 0, name: '', university: '', link: '', about: '' }

export const MsgUpdateProfile = {
  encode(message: MsgUpdateProfile, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateProfile {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateProfile } as MsgUpdateProfile
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

  fromJSON(object: any): MsgUpdateProfile {
    const message = { ...baseMsgUpdateProfile } as MsgUpdateProfile
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

  toJSON(message: MsgUpdateProfile): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.name !== undefined && (obj.name = message.name)
    message.university !== undefined && (obj.university = message.university)
    message.link !== undefined && (obj.link = message.link)
    message.about !== undefined && (obj.about = message.about)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateProfile>): MsgUpdateProfile {
    const message = { ...baseMsgUpdateProfile } as MsgUpdateProfile
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

const baseMsgUpdateProfileResponse: object = {}

export const MsgUpdateProfileResponse = {
  encode(_: MsgUpdateProfileResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateProfileResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateProfileResponse } as MsgUpdateProfileResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateProfileResponse {
    const message = { ...baseMsgUpdateProfileResponse } as MsgUpdateProfileResponse
    return message
  },

  toJSON(_: MsgUpdateProfileResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateProfileResponse>): MsgUpdateProfileResponse {
    const message = { ...baseMsgUpdateProfileResponse } as MsgUpdateProfileResponse
    return message
  }
}

const baseMsgDeleteProfile: object = { creator: '', id: 0 }

export const MsgDeleteProfile = {
  encode(message: MsgDeleteProfile, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteProfile {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteProfile } as MsgDeleteProfile
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteProfile {
    const message = { ...baseMsgDeleteProfile } as MsgDeleteProfile
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
    return message
  },

  toJSON(message: MsgDeleteProfile): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteProfile>): MsgDeleteProfile {
    const message = { ...baseMsgDeleteProfile } as MsgDeleteProfile
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
    return message
  }
}

const baseMsgDeleteProfileResponse: object = {}

export const MsgDeleteProfileResponse = {
  encode(_: MsgDeleteProfileResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteProfileResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteProfileResponse } as MsgDeleteProfileResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteProfileResponse {
    const message = { ...baseMsgDeleteProfileResponse } as MsgDeleteProfileResponse
    return message
  },

  toJSON(_: MsgDeleteProfileResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteProfileResponse>): MsgDeleteProfileResponse {
    const message = { ...baseMsgDeleteProfileResponse } as MsgDeleteProfileResponse
    return message
  }
}

const baseMsgCreateArticle: object = { creator: '', title: '', ipfs: '' }

export const MsgCreateArticle = {
  encode(message: MsgCreateArticle, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.title !== '') {
      writer.uint32(18).string(message.title)
    }
    if (message.ipfs !== '') {
      writer.uint32(26).string(message.ipfs)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateArticle {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateArticle } as MsgCreateArticle
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.title = reader.string()
          break
        case 3:
          message.ipfs = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateArticle {
    const message = { ...baseMsgCreateArticle } as MsgCreateArticle
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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

  toJSON(message: MsgCreateArticle): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.title !== undefined && (obj.title = message.title)
    message.ipfs !== undefined && (obj.ipfs = message.ipfs)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateArticle>): MsgCreateArticle {
    const message = { ...baseMsgCreateArticle } as MsgCreateArticle
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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

const baseMsgCreateArticleResponse: object = { id: 0 }

export const MsgCreateArticleResponse = {
  encode(message: MsgCreateArticleResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateArticleResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateArticleResponse } as MsgCreateArticleResponse
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

  fromJSON(object: any): MsgCreateArticleResponse {
    const message = { ...baseMsgCreateArticleResponse } as MsgCreateArticleResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateArticleResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateArticleResponse>): MsgCreateArticleResponse {
    const message = { ...baseMsgCreateArticleResponse } as MsgCreateArticleResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateArticle: object = { creator: '', id: 0, title: '', ipfs: '' }

export const MsgUpdateArticle = {
  encode(message: MsgUpdateArticle, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateArticle {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateArticle } as MsgUpdateArticle
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

  fromJSON(object: any): MsgUpdateArticle {
    const message = { ...baseMsgUpdateArticle } as MsgUpdateArticle
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

  toJSON(message: MsgUpdateArticle): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.title !== undefined && (obj.title = message.title)
    message.ipfs !== undefined && (obj.ipfs = message.ipfs)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateArticle>): MsgUpdateArticle {
    const message = { ...baseMsgUpdateArticle } as MsgUpdateArticle
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

const baseMsgUpdateArticleResponse: object = {}

export const MsgUpdateArticleResponse = {
  encode(_: MsgUpdateArticleResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateArticleResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateArticleResponse } as MsgUpdateArticleResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateArticleResponse {
    const message = { ...baseMsgUpdateArticleResponse } as MsgUpdateArticleResponse
    return message
  },

  toJSON(_: MsgUpdateArticleResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateArticleResponse>): MsgUpdateArticleResponse {
    const message = { ...baseMsgUpdateArticleResponse } as MsgUpdateArticleResponse
    return message
  }
}

const baseMsgDeleteArticle: object = { creator: '', id: 0 }

export const MsgDeleteArticle = {
  encode(message: MsgDeleteArticle, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteArticle {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteArticle } as MsgDeleteArticle
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteArticle {
    const message = { ...baseMsgDeleteArticle } as MsgDeleteArticle
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
    return message
  },

  toJSON(message: MsgDeleteArticle): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteArticle>): MsgDeleteArticle {
    const message = { ...baseMsgDeleteArticle } as MsgDeleteArticle
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
    return message
  }
}

const baseMsgDeleteArticleResponse: object = {}

export const MsgDeleteArticleResponse = {
  encode(_: MsgDeleteArticleResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteArticleResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteArticleResponse } as MsgDeleteArticleResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteArticleResponse {
    const message = { ...baseMsgDeleteArticleResponse } as MsgDeleteArticleResponse
    return message
  },

  toJSON(_: MsgDeleteArticleResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteArticleResponse>): MsgDeleteArticleResponse {
    const message = { ...baseMsgDeleteArticleResponse } as MsgDeleteArticleResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateProfile(request: MsgCreateProfile): Promise<MsgCreateProfileResponse>
  UpdateProfile(request: MsgUpdateProfile): Promise<MsgUpdateProfileResponse>
  DeleteProfile(request: MsgDeleteProfile): Promise<MsgDeleteProfileResponse>
  CreateArticle(request: MsgCreateArticle): Promise<MsgCreateArticleResponse>
  UpdateArticle(request: MsgUpdateArticle): Promise<MsgUpdateArticleResponse>
  DeleteArticle(request: MsgDeleteArticle): Promise<MsgDeleteArticleResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateProfile(request: MsgCreateProfile): Promise<MsgCreateProfileResponse> {
    const data = MsgCreateProfile.encode(request).finish()
    const promise = this.rpc.request('paranauerj.scichain.scichain.Msg', 'CreateProfile', data)
    return promise.then((data) => MsgCreateProfileResponse.decode(new Reader(data)))
  }

  UpdateProfile(request: MsgUpdateProfile): Promise<MsgUpdateProfileResponse> {
    const data = MsgUpdateProfile.encode(request).finish()
    const promise = this.rpc.request('paranauerj.scichain.scichain.Msg', 'UpdateProfile', data)
    return promise.then((data) => MsgUpdateProfileResponse.decode(new Reader(data)))
  }

  DeleteProfile(request: MsgDeleteProfile): Promise<MsgDeleteProfileResponse> {
    const data = MsgDeleteProfile.encode(request).finish()
    const promise = this.rpc.request('paranauerj.scichain.scichain.Msg', 'DeleteProfile', data)
    return promise.then((data) => MsgDeleteProfileResponse.decode(new Reader(data)))
  }

  CreateArticle(request: MsgCreateArticle): Promise<MsgCreateArticleResponse> {
    const data = MsgCreateArticle.encode(request).finish()
    const promise = this.rpc.request('paranauerj.scichain.scichain.Msg', 'CreateArticle', data)
    return promise.then((data) => MsgCreateArticleResponse.decode(new Reader(data)))
  }

  UpdateArticle(request: MsgUpdateArticle): Promise<MsgUpdateArticleResponse> {
    const data = MsgUpdateArticle.encode(request).finish()
    const promise = this.rpc.request('paranauerj.scichain.scichain.Msg', 'UpdateArticle', data)
    return promise.then((data) => MsgUpdateArticleResponse.decode(new Reader(data)))
  }

  DeleteArticle(request: MsgDeleteArticle): Promise<MsgDeleteArticleResponse> {
    const data = MsgDeleteArticle.encode(request).finish()
    const promise = this.rpc.request('paranauerj.scichain.scichain.Msg', 'DeleteArticle', data)
    return promise.then((data) => MsgDeleteArticleResponse.decode(new Reader(data)))
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
