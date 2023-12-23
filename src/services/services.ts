import { pool } from "../config/database";

class consults {
  async getData() {
    // * defino la consulta
    const query = "SELECT * FROM examples";
    /*
     * llamo al metodo quiery de pool, y aqui se pasa la query de la DB
     ! en este caso sera el query definido anteriormente */
    const response = await pool.query(query);
    // console.log(response);
    return response.rows;
  }

  async deleteUser(id: any) {
    const query = "DELETE FROM examples where id =" + id;

    const response = await pool.query(query);
    // console.log(response);
    return response.rows;
  }

  async modifyUser(id: any, data: any) {
    try {
      const consulta = `UPDATE examples SET name = '${data.name}' WHERE id = ${id}`;
      const respuesta = await pool.query(consulta);
      return respuesta.rows;
    } catch (error) {
      console.error("Error modificando usuario:", error);
      throw error;
    }
  }

  async newUser(data: any) {
    try {
      const consulta = `INSERT INTO examples(name) VALUES('${data.name}')`;
      const respuesta = await pool.query(consulta);
      return respuesta.rows;
    } catch (error) {
      console.error("Error can't added:", error);
      throw error;
    }
  }
}

export const consult = new consults();
