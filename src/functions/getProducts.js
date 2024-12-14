const { app } = require('@azure/functions');

const { getConnection } = require('../database');

async function getProducts() {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM Produto');
        
        const res = {
            products: result.recordset
        };
        
        return { body: JSON.stringify(res) }
        
    } catch (err) {
        const res = {
            message: "Error: " + err
        };
        
        return { body: JSON.stringify(res) }
    }
};

app.http('getProducts', {
    methods: ['GET'],
    authLevel: 'anonymous',
    route: 'products',
    handler: async (request, context) => {
        const products = getProducts()
        
        return products
    },
});