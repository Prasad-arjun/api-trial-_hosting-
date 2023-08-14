const http = require("http");
const PORT = 2000;
const host = "localhost";
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("<h1>Home page </h1>");
  }
  if (req.url == "/about") {
    res.end("<h1>about page </h1>");
  }
  if (req.url == "/contact") {
    res.end("<h1>Contact page </h1>");
  }
  else{
    res.end("<h1>404 error </h1>")
  }
});

server.listen(PORT, host, () => {
  console.log(`server is running at port no ${PORT}`);
});
