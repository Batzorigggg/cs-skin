import { Router } from "express";
import {
  addSkinController,
  deleteSkinController,
  createUser,
} from "../controllers/user.js";
import { login } from "../controllers/auth.js";
import { verifyJWT } from "../jwtMiddleware.js";

export const userRouters = new Router();

export const checkRole = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    if (!allowedRoles.includes(req.user.role))
      return res.status(403).json({ message: "Forbidden" });
    next();
  };
};
userRouters.post("/create", verifyJWT, createUser);
userRouters.post("/login", login);
//userRouters.get("/skins", homePage);
userRouters.delete("/confirm", verifyJWT, deleteSkinController);
userRouters.post("/confirm", verifyJWT, addSkinController);
