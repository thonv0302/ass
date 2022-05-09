const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "mydb1",
  user: "root",
  password: "1234567",
});

module.exports = connection.promise();
  