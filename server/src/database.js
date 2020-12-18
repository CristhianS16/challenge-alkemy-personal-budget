const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'blzoncrxxnukydwrd7jt-mysql.services.clever-cloud.com',
    user: 'u4zs6fn8jmuy0ohs',
    password: 'I9CkwK3SJcWgtLNXHvQy',
    database: 'blzoncrxxnukydwrd7jt'
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