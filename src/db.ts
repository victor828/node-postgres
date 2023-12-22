import { Client } from "pg";

const client = new Client({
  user: "tu_usuario",
  host: "localhost",
  database: "tu_basededatos",
  password: "tu_contraseña",
  port: 5432,
});

client.connect();

export default client;
