import { Document } from "mongoose";

export interface ContatoInterface extends Document {
  _id: string;
  nome?: string;
  canal?: string;
  valor?: string;
  obs?: string;
}
