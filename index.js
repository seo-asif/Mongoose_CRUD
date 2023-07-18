const express = require("express");

const app = express();
app.get("/", (req, res) => {
  return res.send("Hello from Home page");
});
app.get("/about", (req, res) => {
  return res.send("Hello from about page");
});

app.listen(3000, () => console.log("server start on 3000"));
