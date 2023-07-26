let http = require("http");
let fs = require("fs");
let url = require("url");

http
  .createServer((req, res) => {
    let parse = url.parse(req.url, true);
    let path = parse.path;
    if (path === "/") {
      fs.readFile("home.html", "utf8", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else {
      let load = path.slice(1) + ".html";
      fs.readFile(load, "utf8", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(load);
          res.end();
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
    }
  })
  .listen(8000);
