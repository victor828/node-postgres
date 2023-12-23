import express from "express";
import {
  deleteUser,
  getData,
  modifyUser,
  newUser,
} from "../controllers/controller";

const route = express.Router();

route.get("/home/users", getData);
route.delete("/home/users/:id", deleteUser);
route.patch("/home/users/:id", modifyUser);
route.post("/home/users/", newUser);

export default route;
