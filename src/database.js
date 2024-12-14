const sql = require('mssql');

// const config = {
//     user: process.env.DB_USER, 
//     password: process.env.DB_PASSWORD, 
//     server: process.env.DB_SERVER, 
//     database: process.env.DB_NAME,
//     authentication: {
//         type: 'default'
//     },
//     options: {
//         encrypt: true
//     }
// }

const config = {
    user: "ada_admin", 
    password: "@z123456", 
    server: "srvprojetoazure.database.windows.net", 
    database: "AdaProject",
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

async function getConnection() {
    try {
        let pool = await sql.connect(config);
        return pool;
    } catch (err) {
        console.error("Database connection failed: ", err);
    }
}

module.exports = {
    getConnection: getConnection
};
