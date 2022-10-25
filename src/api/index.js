const express = require("express");
require("dotenv").config();

const app = express();
const port = 4000;

app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.listen(port, () =>
  console.log(`Example backend API listening on port ${port}!`)
);
