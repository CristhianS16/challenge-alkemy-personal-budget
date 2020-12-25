const mysql = require('mysql');
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

pool.getConnection( (err, connection) => {
    if(err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('Database connection was closed');
        };
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('Datanase has to many connection');
        };
        if (err.code === 'ECONNREFUSED'){
            console.error('Database connection was refused');
        };
    };

    if (connection) connection.release();
    console.log('DB is connected');
    return;
});

module.exports = pool;