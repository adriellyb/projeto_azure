const { app } = require('@azure/functions');

const { getConnection } = require('../database');

async function createProduct(nome) {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(`INSERT INTO Produto (Nome) VALUES ('${nome}');`);
        const info = await pool.request().query(
            `SELECT TOP 1 * FROM Produto ORDER BY Id DESC;`
        ); // seleciona o ultimo registro da tabela

        const res = {
            product: info.recordset,
            message: `Produto foi criado na base de dados.`
        };

        return { body: JSON.stringify(res) }

    } catch (err) {
        const res = {
            message: "Error: " + err
        };
                
        return { body: JSON.stringify(res) }
    }
}

app.http('createProduct', {
    methods: ['POST'],
    headers : { 'Content-Type' : 'application/json' },
    authLevel: 'anonymous',
    route: 'products',
    handler: async (request, context) => {
        const req = await request.json();
        const { nome } = req;
        
        if (!nome) {
            return {
                message: 'Por favor insira um nome para o produto.'
            };
        }
        const product = createProduct(nome);

        return product;
    }
});
