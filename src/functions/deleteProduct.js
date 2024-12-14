const { app } = require('@azure/functions');

const { getConnection } = require('../database');

async function deleteProduct(id) {
    try {
        const pool = await getConnection();
        const info = await pool.request().query(`SELECT * FROM Produto WHERE Id = ${id}`);
        const result = await pool.request().query(`DELETE FROM Produto WHERE Id = ${id}`);

        const res = {
            product: info.recordset,
            message: result.rowsAffected[0] ? 
            `Produto foi excluído da base de dados.` : 
            "Produto não existe na base de dados."
        };
        console.log(res);

        return { body: JSON.stringify(res) }

    } catch (err) {
        const res = {
            message: "Error: " + err
        };
        
        console.log(res);
        
        return { body: JSON.stringify(res) }
    }
};

app.http('deleteProduct', {
    methods: ['DELETE'],
    authLevel: 'anonymous',
    route: 'products/{id}',
    handler: async (request, context) => {
        const id = request.params.id;
        const product = deleteProduct(id);

        return product;
    },
});