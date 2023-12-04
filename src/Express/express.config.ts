import compression from "compression";
import cookieParser from "cookie-parser";
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import v1 from "./routes/v1/index.routes.js";

const ExpressConfig = (): Application => {
  const app = express();
  app.use(compression());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(helmet());
  app.use(cookieParser());
  app.use(morgan("dev"));

  app.use("/v1", v1);

  return app;
};
export default ExpressConfig;
