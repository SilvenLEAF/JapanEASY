
import { Document } from 'mongoose'






/* ------------------------------------------
.            MAIN INTERFACE
------------------------------------------ */
export default interface ShortURLInterface extends Document {
  full: any,
  short?: string,
  clicks?: number
}







