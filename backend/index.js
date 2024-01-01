const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");

const port = process.env.PORT || 5001;

const static_path = path.join(__dirname, "../frontend");
app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.send("Welcome to my server!!");
});

app.listen(port, async () => {
  try {
    console.log(`http://localhost:${port}`);
  } catch (error) {
    console.log("Failed to listen server");
  }
});
