

export const queries = {

    getAllProducts: 'SELECT * FROM Products',
    addNewProducts: 'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)',
    getProductById:'SELECT * FROM Products Where Id = @Id'
}
