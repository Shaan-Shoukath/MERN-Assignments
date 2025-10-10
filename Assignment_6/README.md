# Assignment 6: Creating a Simple Web Server with Node.js

## Overview
This project demonstrates the creation of a basic web server using Node.js core modules. The server handles multiple routes, serves HTML pages with CSS styling, and includes proper error handling.

## Project Structure
```
Assignment_6/
├── server.js              # Main server file
├── pages/                 # HTML pages directory
│   ├── home.html         # Home page
│   ├── about.html        # About page
│   ├── contact.html      # Contact page
│   └── 404.html          # Custom 404 error page
├── public/               # Static assets directory
│   └── style.css         # CSS stylesheet
└── README.md             # Project documentation
```

## Features
- ✅ Built with Node.js core modules only (http, fs, path)
- ✅ Listens on port 3000
- ✅ Handles routes: /home, /about, /contact
- ✅ Serves HTML files for each route
- ✅ Custom 404 page for invalid routes
- ✅ Proper HTTP status codes (200, 404, 500)
- ✅ Asynchronous file operations using fs.readFile()
- ✅ CSS styling linked to all pages
- ✅ Navigation links between pages
- ✅ Comprehensive code comments
- ✅ Responsive design
- ✅ Error handling for file operations

## How to Run
1. Navigate to the Assignment_6 directory
2. Run the server: `node server.js`
3. Open your browser and visit: `http://localhost:3000`
4. Navigate between pages using the menu

## Available Routes
- `/` or `/home` - Home page
- `/about` - About page  
- `/contact` - Contact page
- `/public/style.css` - CSS stylesheet
- Any other route - 404 error page

## Technical Implementation
The server uses the HTTP module to create a server instance, handles routing through URL parsing, serves files asynchronously using the fs module, and includes proper content-type headers for HTML and CSS files.
