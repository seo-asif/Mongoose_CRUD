const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

const users = require("./users_db.json");
//Group routing

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n${Date.now()} : ${req.method} ${req.path}`,
    (err, data) => next()
  );
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.status().json(user);
  })
  .patch((req, res) => {
    return res.json({ status: "patch" });
  })
  .delete((req, res) => {
    return res.json({ status: "delete" });
  });

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

app.post("/api/users/", (req, res) => {
  const body = req.body;
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("/users_db.json", JSON.stringify(users), (err, data) => {
    if (body.length > 0) {
      return res.status(201).json({ status: "success ", id: users.length });
    } else {
      return res.json({ status: "error " });
    }
  });
});

app.listen(PORT, () => console.log("server start on 3000"));
