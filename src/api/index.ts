import express, { Request, Response, NextFunction, Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import logger from "../config/Logger";
import { swaggerUIServe, swaggerUISetup } from "../config/swagger/config";
import { connectDatabase } from "../config/DatabaseConfig";
import errorHandler from "./v1/middlewares/errorHandler";
import bookRoute from "./v1/routes/book";

//Dependencies
const app: Application = express();
connectDatabase();
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use("/api/v1/", bookRoute);

//Api Docs Route
app.use("/api-docs", swaggerUIServe, swaggerUISetup);

//Error Handler
app.use(errorHandler);

//404 Error
app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ success: false, message: "Not Found" });
  logger.error(process.env.NODE_ENV);
});

//Start Server
const server = app.listen(process.env.PORT! || 5000);
process.on("unhandledRejection", (err: any) => {
  logger.info(err);
  server.close(() => process.exit(1));
});

export default app;