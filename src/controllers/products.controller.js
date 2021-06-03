
import { getConnection, sql } from '../database/conexion';


export const getProducts = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM Products');

    console.log(result);

    res.json(result.recordset);
}


export const createNewProducts = async (req, res) => {

    const { name, description, quantity = 0 } = req.body;



    if (name == null || description == null) {
        return res.status(400).json({ msg: 'Bad Requst. Please fill all filds' });
    }

    console.log(name, description, quantity);

    const pool = await getConnection()
    await pool.request()
        .input("name", sql.VarChar, name)
        .input("description", sql.Text, description)
        .input("quantity", sql.Int, quantity)
        .query('INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)')

    //res.json('New Product!!!')
    res.json({ name, description, quantity });
}
