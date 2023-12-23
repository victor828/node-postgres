"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consult = void 0;
const database_1 = require("../config/database");
class consults {
    async getData() {
        // * defino la consulta
        const query = "SELECT * FROM examples";
        /*
         * llamo al metodo quiery de pool, y aqui se pasa la query de la DB
         ! en este caso sera el query definido anteriormente */
        const response = await database_1.pool.query(query);
        // console.log(response);
        return response.rows;
    }
    async deleteUser(id) {
        const query = "DELETE FROM examples where id =" + id;
        const response = await database_1.pool.query(query);
        // console.log(response);
        return response.rows;
    }
    async modifyUser(id, data) {
        try {
            const consulta = `UPDATE examples SET name = '${data.name}' WHERE id = ${id}`;
            const respuesta = await database_1.pool.query(consulta);
            return respuesta.rows;
        }
        catch (error) {
            console.error("Error modificando usuario:", error);
            throw error;
        }
    }
    async newUser(data) {
        try {
            const consulta = `INSERT INTO examples(name) VALUES('${data.name}')`;
            const respuesta = await database_1.pool.query(consulta);
            return respuesta.rows;
        }
        catch (error) {
            console.error("Error can't added:", error);
            throw error;
        }
    }
}
exports.consult = new consults();
