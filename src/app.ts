import express, { Application } from "express";
import cors from "cors";
import { HerderRoutes } from "./modules/header/header.routes";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", HerderRoutes);
export default app;
