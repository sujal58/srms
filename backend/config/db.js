const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "srms",
});

const query = "select * from student_data";

connection
  .query(query)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
