var mysql = require('mysql');

var con = {
    host: "192.168.1.80",
    user: "root",
    password: "pass",
    database: 'testing',
    timezone: 'utc'
}
var db;

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection(con);
        db.connect(function (err) {
            if (!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}
module.exports = connectDatabase();
