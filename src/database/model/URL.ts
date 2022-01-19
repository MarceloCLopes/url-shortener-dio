import {prop, Typegoose} from '@typegoose/typegoose'

export const URL extends Typegoose{
  @prop({ required: true })
  hash: string;

  @prop({ required: true })
  originalURL: string;

  @prop({ required: true })
  shortURL: string;

},

export const URLModel = new URL().getModelForClass(URL)