const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = 3000;

// Async function to read and serve files with proper error handling
function serveFile(filePath, res, contentType = "text/html") {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err.message);
      serve404Page(res);
    } else {
      res.writeHead(200, {
        "Content-Type": contentType,
        "Cache-Control": "no-cache",
      });
      res.end(data);
    }
  });
}

// Serve custom 404 page
function serve404Page(res) {
  const notFoundPath = path.join(__dirname, "pages", "404.html");
  fs.readFile(notFoundPath, "utf8", (err, data) => {
    if (err) {
      // Simple fallback 404 if custom 404.html doesn't exist
      console.error("Custom 404.html not found, using simple fallback");
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end(
        "404 - Page Not Found\nAvailable routes: /home, /about, /services, /contact"
      );
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

// Handle static file requests (CSS, images, etc.)
function serveStaticFile(req, res) {
  const parsedUrl = url.parse(req.url);
  let filePath = path.join(__dirname, parsedUrl.pathname);

  // Security check to prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    serve404Page(res);
    return;
  }

  // Determine content type based on file extension
  const ext = path.extname(filePath).toLowerCase();
  const contentTypes = {
    ".css": "text/css",
    ".js": "application/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".ico": "image/x-icon",
  };

  const contentType = contentTypes[ext] || "text/plain";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(`Static file not found: ${filePath}`);
      serve404Page(res);
    } else {
      res.writeHead(200, {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600",
      });
      res.end(data);
    }
  });
}

// Create the server with enhanced routing
const server = http.createServer((req, res) => {
  const requestUrl = req.url;
  const method = req.method;

  console.log(`${new Date().toISOString()} - ${method} ${requestUrl}`);

  // Handle static files (CSS, JS, images)
  if (
    requestUrl.startsWith("/styles/") ||
    requestUrl.match(/\.(css|js|png|jpg|jpeg|gif|ico)$/)
  ) {
    serveStaticFile(req, res);
    return;
  }

  // Handle different routes
  switch (requestUrl) {
    case "/":
    case "/home":
      serveFile(path.join(__dirname, "pages", "home.html"), res);
      break;

    case "/about":
      serveFile(path.join(__dirname, "pages", "about.html"), res);
      break;

    case "/services":
      serveFile(path.join(__dirname, "pages", "services.html"), res);
      break;

    case "/contact":
      serveFile(path.join(__dirname, "pages", "contact.html"), res);
      break;

    default:
      // Handle 404 for any other route
      console.log(`404 - Route not found: ${requestUrl}`);
      serve404Page(res);
      break;
  }
});

// Enhanced error handling for the server
server.on("error", (err) => {
  console.error("Server error:", err);
});

// Graceful shutdown handling
process.on("SIGINT", () => {
  console.log("\nShutting down server gracefully...");
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log("=".repeat(50));
  console.log(`🚀 CleanCare Laundry Server Started`);
  console.log(`📅 Started at: ${new Date().toLocaleString()}`);
  console.log(`🌐 Server running at: http://localhost:${PORT}`);
  console.log("=".repeat(50));
  console.log("📋 Available routes:");
  console.log(`   🏠 Home:     http://localhost:${PORT}/home`);
  console.log(`   ℹ️  About:    http://localhost:${PORT}/about`);
  console.log(`   🛠️  Services: http://localhost:${PORT}/services`);
  console.log(`   📞 Contact:  http://localhost:${PORT}/contact`);
  console.log("=".repeat(50));
  console.log("Press Ctrl+C to stop the server");
});

module.exports = server;
