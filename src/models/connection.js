const mysql = require('mysql');

const connection =mysql.createConnection({
    host:,
    port:3308,
    user:,
    password:,
    databse:

});

connection.connect();
module.exports=connection;