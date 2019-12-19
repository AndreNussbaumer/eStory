const mysql = require('mysql');


function getConnection(){
    var con = mysql.createConnection({
        host:"eu-cdbr-west-02.cleardb.net",
        user:"bc70d0f8152b8f",
        password:"551789e3",
        database:"heroku_4eaa0c"
    });
    return con;
}

module.exports.getConnection = getConnection;
