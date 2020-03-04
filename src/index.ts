import express from "express";
import cors from "cors";
import mongoose, { Mongoose } from "mongoose";

import routes from "./Routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(routes);
    this.DataBase();
  }

  public DataBase() {
    const uri =
      "mongodb+srv://testNode:izOCHc82PXp7vkhm@cluster0-kzcer.mongodb.net/test?retryWrites=true&w=majority";
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology:true });
  }
}
new App().express.listen(3000);
