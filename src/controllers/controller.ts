import { Request, Response } from "express";
import { consult } from "../services/services";

export async function getData(_req: Request, res: Response) {
  const response = await consult.getData();
  res.json({
    data: response,
  });
}

export async function deleteUser(req: Request, res: Response) {
  const id = req.params["id"];

  await consult.deleteUser(id);
  res.json({
    message: "Is removed",
  });
  return;
}

export async function modifyUser(req: Request, res: Response) {
  const id = req.params["id"];

  const data = req.body;
  console.log(id);
  console.log(data);
  await consult.modifyUser(id, data);
  res.json({
    message: "Modificated",
  });
  return;
}

export async function newUser(req: Request, res: Response) {
  const data = req.body;
  console.log(data);
  await consult.newUser(data);
  res.json({
    message: "new user " + data.name + " added",
  });
  return;
}
