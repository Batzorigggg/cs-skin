import { Router } from "express";
// import {

// } from

export const userRouters = new Router();

userRouters.post("/login", login);
userRouters.get("/skins", homePage);
userRouters.delete("/confirm", deleteSkin);
userRouters.post("/confirm", addSkin);
