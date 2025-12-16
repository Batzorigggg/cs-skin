import { Router } from "express";
import {
  addSkinController,
  deleteSkinController,
} from "../controllers/user.js";

export const userRouters = new Router();

// userRouters.post("/login", login);
// userRouters.get("/skins", homePage);
userRouters.delete("/confirm", deleteSkinController);
userRouters.post("/confirm", addSkinController);
