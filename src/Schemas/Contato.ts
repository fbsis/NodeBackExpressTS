import { Schema, model } from "mongoose";

import { ContatoInterface } from "../Interfaces/ContatoInterface";

const Contato = new Schema(
  {
    nome: {
      type: String
    },
    canal: {
      type: String
    },
    valor: {
      type: String
    },
    obs: {
      type: String
    }
  },
  { versionKey: false }
);

export default model<ContatoInterface>("Contato", Contato);
