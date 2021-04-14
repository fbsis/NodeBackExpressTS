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
    mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
  }
}
export default new App().express.listen(process.env.PORT);
