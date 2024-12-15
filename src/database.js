const sql = require('mssql');

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
