import http from "http";
import handler from "serve-handler";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  return handler(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
