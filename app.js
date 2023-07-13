import http from "http";
import fs from "fs";
import path from "path";

class Server {
  constructor(port) {
    this.port = port;
  }
  start() {
    http
      .createServer((req, res) => {
        fs.readFile(path.join(path.resolve(), "index.html"), (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.write("index.html 500");
            res.end();
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
          }
        });
        fs.readFile(path.join(path.resolve(), "react.jsx"), (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.write("react.js 500");
            res.end();
          } else {
            res.writeHead(200, { "Content-Type": "application/javascript" });
            res.write(data);
            res.end();
          }
        });
      })
      .listen(this.port, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Server running at http://localhost:${this.port}`);
        }
      });
  }
}

const server = new Server(5020);
server.start();

// http
//   .createServer((req, res) => {
//     fs.readFile("index.html", (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         res.end();
//       }
//     });
//   })
//   .listen(5020, (error) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log("Server running at http://localhost:5020");
//     }
//   });
