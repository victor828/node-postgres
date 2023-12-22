import { parse } from "url";
import db from "../db";

// Manejador de ruta para obtener todos los usuarios
export const getUsersHandler = async (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  try {
    const result = await db.query("SELECT * FROM users");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result.rows));
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
};

// Manejador de ruta para manejar solicitudes no encontradas
export const notFoundHandler = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
};

