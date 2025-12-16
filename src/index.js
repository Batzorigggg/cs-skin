const express = require("express");
const { connectDb } = require("../data/db");
const app = express();
app.get("/", (req, res) => res.send("API is running"));
app.listen(3000, () => console.log("Server on 3000"));