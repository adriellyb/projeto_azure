const { app } = require('@azure/functions');

const { getConnection } = require('../database');

async function updateProduct(id, nome) {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(`UPDATE Produto SET Nome = '${nome}' WHERE Id = ${id};`);
        const info = await pool.request().query(`SELECT * FROM Produto WHERE Id = ${id}`);

        const res = {
            product: result.rowsAffected[0] ? info.recordset : result.recordsets,
            message: result.rowsAffected[0] ? 
            `Produto foi alterado na base de dados.`:
            `Não há nenhum produto com este id na base de dados`
        };

        console.log(res);
        
        return { body: JSON.stringify(res) }

    } catch (err) {
        const res = {
            message: "Error: " + err
        };
                
        return { body: JSON.stringify(res) }
    }
}

updateProduct(50, "Sorvete");

app.http('updateProduct', {
    methods: ['PUT'],
    headers : { 'Content-Type' : 'application/json' },
    authLevel: 'anonymous',
    route: 'products/{id}',
    handler: async (request, context) => {
        const id = request.params.id;
        const req = await request.json();
        const { nome } = req;
        
        if (!nome) {
            return {
                message: 'Por favor insira um nome para o produto.'
            };
        }
        const product = updateProduct(id, nome);

        return product;
    }
});
