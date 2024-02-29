const express = require("express");
const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the backend");
});

app.listen(port, async () => {
  console.log(`Server started at http://localhost:${port}`);
});
