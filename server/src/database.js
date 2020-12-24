const mysql = require('mysql');
console.log(process.env.DB_DATABASE)
const mysqlConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

mysqlConnection.connect( err => {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Db is connected');
    };
});

module.exports = mysqlConnection;