import express from "express";
import route from "./routes/routes";

const app = express();
const port = 5500;

app.use(route);
app.listen(port);
