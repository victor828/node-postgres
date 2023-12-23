"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controllers/controller");
const route = express_1.default.Router();
route.get("/home/users", controller_1.getData);
route.delete("/home/users/:id", controller_1.deleteUser);
route.patch("/home/users/:id", controller_1.modifyUser);
route.post("/home/users/", controller_1.newUser);
exports.default = route;
