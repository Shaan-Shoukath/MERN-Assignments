# CleanCare Laundry - Node.js Web Server

A simple yet functional web server built with Node.js that serves a laundry service website with multiple routes and static file handling.

## 📋 Assignment Requirements Met

✅ **Node.js HTTP Module**: Uses the built-in `http` module to create the server  
✅ **Multiple Routes**: Implements routing for `/home`, `/about`, `/services`, and `/contact`  
✅ **HTML Pages**: Serves dedicated HTML pages for each route  
✅ **Port Configuration**: Runs on port 3000 (configurable)  
✅ **HTTP Status Codes**: Proper 200 and 404 status codes  
✅ **Asynchronous Code**: Uses async file reading with callbacks  
✅ **Error Handling**: Custom 404 page and comprehensive error handling  
✅ **CSS Styling**: Professional styling with responsive design  
✅ **Static File Serving**: Handles CSS, images, and other static assets  

## 🚀 Features

- **Professional Design**: Modern, responsive UI with gradient backgrounds
- **Multiple Pages**: Home, About, Services, and Contact pages
- **Static File Handling**: Serves CSS, JavaScript, and image files
- **Custom 404 Page**: User-friendly error page with navigation
- **Security**: Basic directory traversal protection
- **Logging**: Request logging with timestamps
- **Graceful Shutdown**: Proper server shutdown handling

## 📁 Project Structure

```
├── server.js              # Main server file
├── README.md              # This file
├── pages/                 # HTML pages directory
│   ├── home.html         # Homepage
│   ├── about.html        # About page
│   ├── services.html     # Services page
│   ├── contact.html      # Contact page
│   └── 404.html          # Custom 404 error page
└── styles/               # CSS stylesheets
    ├── style.css         # Basic styling
    └── main.css          # Advanced styling with animations
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 12 or higher)
- A web browser

### Installation Steps

1. **Clone or download** the project files to your local machine

2. **Navigate** to the project directory:
   ```bash
   cd cleancare-laundry-server
   ```

3. **No additional dependencies** needed - uses only Node.js built-in modules!

## ▶️ Running the Server

1. **Start the server**:
   ```bash
   node server.js
   ```

2. **You should see output like**:
   ```
   ==================================================
   🚀 CleanCare Laundry Server Started
   📅 Started at: 10/1/2025, 2:30:45 PM
   🌐 Server running at: http://localhost:3000
   ==================================================
   📋 Available routes:
      🏠 Home:     http://localhost:3000/home
      ℹ️  About:    http://localhost:3000/about
      🛠️  Services: http://localhost:3000/services
      📞 Contact:  http://localhost:3000/contact
   ==================================================
   Press Ctrl+C to stop the server
   ```

3. **Open your browser** and visit any of the available routes

## 🌐 Available Routes

| Route | Description | File Served |
|-------|-------------|-------------|
| `/` or `/home` | Homepage with service overview | `pages/home.html` |
| `/about` | About us page | `pages/about.html` |
| `/services` | Detailed services and pricing | `pages/services.html` |
| `/contact` | Contact information and form | `pages/contact.html` |
| Any other route | Custom 404 error page | `pages/404.html` |

## 🎨 Styling

The website includes two CSS files:
- **`styles/style.css`**: Basic, clean styling for simple pages
- **`styles/main.css`**: Advanced styling with gradients, animations, and responsive design

## 🧪 Testing the Server

### Manual Testing
1. Start the server with `node server.js`
2. Test each route in your browser:
   - http://localhost:3000/home
   - http://localhost:3000/about
   - http://localhost:3000/services
   - http://localhost:3000/contact
3. Test the 404 page by visiting an invalid route like http://localhost:3000/invalid

### Expected Behavior
- ✅ All valid routes should load their respective HTML pages
- ✅ CSS styling should be applied correctly
- ✅ Invalid routes should show the custom 404 page
- ✅ Server should log all requests to the console

## 🔧 Technical Implementation

### Server Features
- **Modular Design**: Separate functions for different concerns
- **Error Handling**: Comprehensive error handling for file operations
- **Security**: Basic protection against directory traversal attacks
- **Content Types**: Proper MIME type handling for different file types
- **Caching**: Appropriate cache headers for static files

### Code Highlights
```javascript
// Enhanced routing with switch statement
switch (requestUrl) {
    case '/':
    case '/home':
        serveFile(path.join(__dirname, 'pages', 'home.html'), res);
        break;
    // ... other routes
}

// Static file handling with security
function serveStaticFile(req, res) {
    const parsedUrl = url.parse(req.url);
    let filePath = path.join(__dirname, parsedUrl.pathname);
    
    // Security check to prevent directory traversal
    if (!filePath.startsWith(__dirname)) {
        serve404Page(res);
        return;
    }
    // ... rest of implementation
}
```

## 🛑 Stopping the Server

Press `Ctrl+C` in the terminal where the server is running. The server will shut down gracefully.

## 🚨 Troubleshooting

### Common Issues

**Port already in use**:
```
Error: listen EADDRINUSE: address already in use :::3000
```
- Solution: Change the PORT variable in `server.js` or stop other processes using port 3000

**CSS not loading**:
- Check that the `styles/` directory exists
- Verify CSS file paths in HTML files match the actual file structure

**Pages not found**:
- Ensure all HTML files exist in the `pages/` directory
- Check file permissions

## 📝 Assignment Submission Checklist

- [x] Server uses Node.js http module
- [x] Server listens on port 3000
- [x] Implements routing for /home, /about, /contact
- [x] Serves corresponding HTML pages
- [x] Includes proper HTTP status codes (200, 404)
- [x] Uses asynchronous code (fs.readFile with callbacks)
- [x] Includes error handling with custom 404 page
- [x] CSS styling applied to HTML pages
- [x] Additional meaningful routes (/services)
- [x] Basic but functional implementation
- [x] README file with setup instructions

## 👨‍💻 Development Notes

This server demonstrates:
- Basic web server concepts
- File system operations
- HTTP request/response handling
- Static file serving
- Error handling best practices
- Clean, maintainable code structure

Perfect for learning Node.js fundamentals and web server basics!