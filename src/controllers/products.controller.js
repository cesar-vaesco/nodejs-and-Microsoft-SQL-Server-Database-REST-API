
import { getConnection, sql, queries } from '../database';



export const getProducts = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProducts);
        console.log(result);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}


export const createNewProducts = async (req, res) => {

    const { name, description, quantity = 0 } = req.body;

    if (name == null || description == null) {
        return res.status(400).json({ msg: 'Bad Requst. Please fill all filds' });
    }

    console.log(name, description, quantity);

    try {
        const pool = await getConnection()
        await pool.request()
            .input("name", sql.VarChar, name)
            .input("description", sql.Text, description)
            .input("quantity", sql.Int, quantity)
            .query(queries.addNewProducts)

        //res.json('New Product!!!')
        res.json({ name, description, quantity });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getProductsById = async (req, res) => {

    const { id } = req.params;

    if ( isNaN(id)) {
        return res.status(400).json({ msg: 'Bad Requst. Please Id must be number' });
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('Id', id)
            .query(queries.getProductById);

        console.log(result);

        //res.send(id);
        res.send(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }


}
