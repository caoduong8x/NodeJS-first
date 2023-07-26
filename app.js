let http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Node JS</title>");
    res.write("</head>");
    res.write("<body><h1>Node Server is running</h1></body>");
    res.write("</head>");
    res.end();
  })
  .listen(8000);
