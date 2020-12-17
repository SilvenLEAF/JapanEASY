

import mongoose, { Schema } from 'mongoose'
import shortId from 'shortid';
import ShortURLInterface from '../interfaces/databaseInterfaces/ShortURLInterface';







/* ------------------------------------------
.                MAIN SCHEMA
------------------------------------------ */
const ShortURLSchema: Schema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  }
});







/* ------------------------------------------
.                SHORTURL MODEL
------------------------------------------ */
export default mongoose.model<ShortURLInterface>('ShortURL', ShortURLSchema);