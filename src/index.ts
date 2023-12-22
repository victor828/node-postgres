import http from "node:http";

const requestListener: http.RequestListener = (_req, response) => {
  if (_req.url === "/api/users") {
    response.writeHead(200, {
      "Content-Type": "application/json",
      "X-Powered-By": "Node.js",
    });
  }
  response.end(
    JSON.stringify({
      users: [],
    })
  );
};

const server = http.createServer(requestListener);
server.listen(5500, () => {
  console.log("Server is listening on port http://localhost:5500");
});
