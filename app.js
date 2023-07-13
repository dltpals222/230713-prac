const http = require("http");
const fs = require("fs");
const path = require("path");

class Server {
  constructor(port) {
    this.port = port;
  }
  start() {
    http
      .createServer((req, res) => {
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.write("500");
            res.end();
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
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
