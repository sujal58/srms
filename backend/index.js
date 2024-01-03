const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const sequelize = require("./config/db");
const bodyparser = require("body-parser");
const port = process.env.PORT || 5001;

app.use(bodyparser.json());

//static page as a response
const static_path = path.join(__dirname, "../frontend");
app.use(express.static(static_path));

//
app.get("/", (req, res) => {
  res.send("Welcome to my server!!");
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully");
  app.listen(port, async () => {
    console.log(`http://localhost:${port}`);
  });
} catch (error) {
  console.log("unable to connect to the database", error);
}
