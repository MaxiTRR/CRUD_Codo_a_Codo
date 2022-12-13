const mysql = require('mysql');
//require('dotenv').config();

const connection = mysql.createConnection({
    host:'localhost',
    port:3308,
    db:'crud_db_codo_a_codo',
    user:'root',
    password:'root',

});

connection.connect((error)=>{
    if(error){
        console.error(`The connection error is ${error}`);
        return;
    };
    console.log('Connected to the Database!');
});

module.exports=connection;