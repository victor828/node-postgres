"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = exports.modifyUser = exports.deleteUser = exports.getData = void 0;
const services_1 = require("../services/services");
async function getData(_req, res) {
    const response = await services_1.consult.getData();
    res.json({
        data: response,
    });
}
exports.getData = getData;
async function deleteUser(req, res) {
    const id = req.params["id"];
    await services_1.consult.deleteUser(id);
    res.json({
        message: "Is removed",
    });
    return;
}
exports.deleteUser = deleteUser;
async function modifyUser(req, res) {
    const id = req.params["id"];
    const data = req.body;
    console.log(id);
    console.log(data);
    await services_1.consult.modifyUser(id, data);
    res.json({
        message: "Modificated",
    });
    return;
}
exports.modifyUser = modifyUser;
async function newUser(req, res) {
    const data = req.body;
    console.log(data);
    await services_1.consult.newUser(data);
    res.json({
        message: "new user " + data.name + " added",
    });
    return;
}
exports.newUser = newUser;
