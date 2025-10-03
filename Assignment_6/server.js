const http = require("http");
const fs = require("fs");

const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  const url = req.url;

  console.log(`Request received for: ${url}`);

  // Route handling
  if (url === "/" || url === "/home") {
    serveFile("pages/home.html", res);
  } else if (url === "/about") {
    serveFile("pages/about.html", res);
  } else if (url === "/contact") {
    serveFile("pages/contact.html", res);
  } else {
    // 404 - Page not found
    serveFile("pages/404.html", res, 404);
  }
});

// Function to serve HTML files
function serveFile(filePath, res, statusCode = 200) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 - Page Not Found</h1>");
    } else {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("Available routes:");
  console.log("  /home - Home page");
  console.log("  /about - About page");
  console.log("  /contact - Contact page");
});
