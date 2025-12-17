import { Router } from "express";
import {
  addSkinController,
  createUserController,
  deleteSkinController,
} from "../controllers/user.js";
import { loginUserService } from "../services/user.js";

export const userRouters = new Router();

userRouters.post("/login", loginUserService);
// userRouters.get("/skins", homePage);
userRouters.delete("/confirm", deleteSkinController);
userRouters.post("/confirm", addSkinController);
userRouters.post("/createUser", createUserController);
