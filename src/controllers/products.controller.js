
import { getConnection } from '../database/conexion';

export const getProducts = async (req, res) => {

    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM Products');

    console.log(result);

    res.json(result.recordset);
}
