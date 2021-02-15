import express from "express";
import glabalController from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", glabalController.homeController);

export default globalRouter;
