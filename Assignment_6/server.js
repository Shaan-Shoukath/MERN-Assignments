// Import required Node.js core modules
const http = require("http");
const fs = require("fs");
const path = require("path");

// Define server configuration
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  const url = req.url;
  
  console.log(`Request received for: ${url}`);

  // Route handling - Define all available routes
  if (url === "/" || url === "/home") {
    // Serve home page for root and /home routes
    serveFile("pages/home.html", res, "text/html");
  } else if (url === "/about") {
    // Serve about page
    serveFile("pages/about.html", res, "text/html");
  } else if (url === "/contact") {
    // Serve contact page
    serveFile("pages/contact.html", res, "text/html");
  } else if (url === "/public/style.css") {
    // Serve CSS file with proper content type
    serveFile("public/style.css", res, "text/css");
  } else {
    // Handle 404 - Page not found for any other routes
    serveFile("pages/404.html", res, "text/html", 404);
  }
});

// Function to serve files (HTML, CSS, etc.) with proper error handling
function serveFile(filePath, res, contentType, statusCode = 200) {
  // Use asynchronous file reading as required
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      // Handle file read errors (e.g., file not found)
      console.error("Error reading file:", err);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>500 - Internal Server Error</h1><p>Unable to load the requested file.</p>");
    } else {
      // Successfully read file, send with appropriate headers
      res.writeHead(statusCode, { "Content-Type": contentType });
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
