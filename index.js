const express = require("express");

const app = express();
const PORT = 3000;

const users = require("./users_db.json");


//Get API METHOD
app.get("/", (req, res) => {
  return res.send("Hello from Home page");
});
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `<ul>
    ${users
      .map(
        (user) => `
      <li>${user.first_name} ${user.job_title}</li>`
      )
      .join("")}
  </ul>`;
  return res.send(html);
});




app.get("/about", (req, res) => {
  return res.send("Hello from about page");
});

app.listen(PORT, () => console.log("server start on 3000"));
