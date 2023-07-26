let http = require("http");
let fs = require("fs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("Code.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      fs.writeFile("Code2.html", data, "utf8", (err) => {
        if (err) throw err;
      });
      res.end();
    });
  })
  .listen(8000);
