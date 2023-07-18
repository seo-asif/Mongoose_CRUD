const http = require("http");
const fs = require("fs");
const url = require("url");

function myHandler(req, res) {
  if (req.url === "/favicon.ico") return res.end();
  const log = `\n${Date.now()}: New Request Received form ${req.method} ${
    req.url
  }`;

  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("homepage");
        break;
      case "/about":
        const name = myUrl.query?.name;
        res.end(`Hi.. ${name}.. welcome`);
        break;
      default:
        res.end("Select another page :404");
    }
  });
}

const myServer = http.createServer(myHandler);

myServer.listen(3000, () => console.log("server start on 3000"));
