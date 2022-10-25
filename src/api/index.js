const express = require("express");
require("dotenv").config();

const app = express();
const port = 4000;

app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.get("/percent/:num/:percentage", (req, res) => {
  const {num, percentage} = req.params;

  res.send(calcPercentage(Number(num), Number(percentage)).toString());
});

app.listen(port, () =>
  console.log(`Example backend API listening on port ${port}!`)
);

const calcPercentage = (num, percent) => {
  return (percent / 100) * num;
};