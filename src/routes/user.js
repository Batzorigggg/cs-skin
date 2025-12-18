import { Router } from "express";
import {
  addSkinController,
  deleteSkinController,
  loginUser,
  createUser,
  rentController,
} from "../controllers/user.js";
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
userRouters.post("/create", createUser);
userRouters.post("/login", loginUser);
userRouters.get("/skins", verifyJWT, rentController);
userRouters.delete("/confirm", deleteSkinController);
userRouters.post("/confirm", addSkinController);
