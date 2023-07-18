const http = require("http");

const myServer = http.createServer((req, res) => {
  console.log("new Respond recieve");
  console.log(req.headers);

  res.end("hello from server");
});

myServer.listen(3000, () => console.log("server start on 3000"));
