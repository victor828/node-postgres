import express from "express";
import route from "./routes/routes";
import fs from "node:fs";

const app = express();
const port = 5000;
app.use(express.json());
app.use(route);
app.listen(port, () => console.log("Conectado"));
