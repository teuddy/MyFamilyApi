const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(() => {
  return "listing on 3000";
}, 3000);
