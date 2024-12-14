const { app } = require('@azure/functions');

const { getConnection } = require('../database');

async function getProductById(id) {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(`SELECT * FROM Produto WHERE Id = ${id}`);

        const res = {
            product: result.recordset
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

app.http('getProductById', {
    methods: ['GET'],
    authLevel: 'anonymous',
    route: 'products/{id}',
    handler: async (request, context) => {
        const id = request.params.id;
        const product = getProductById(id);

        return product;
    },
});