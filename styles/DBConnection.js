const mysql = require('mysql');

function getConnection(){
    var con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"thestory"
    });
    return con;
}

module.exports.getConnection = getConnection;
