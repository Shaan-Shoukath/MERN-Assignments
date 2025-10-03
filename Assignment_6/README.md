# Simple Node.js Web Server

A basic web server built with Node.js that serves HTML pages with routing.

## Features

- Uses Node.js HTTP module
- Serves HTML pages for different routes
- Inline CSS styling
- Custom 404 error page
- Basic error handling

## Project Structure

```
├── server.js              # Main server file
├── README.md              # This file
└── pages/                 # HTML pages directory
    ├── home.html         # Home page
    ├── about.html        # About page
    ├── contact.html      # Contact page
    └── 404.html          # 404 error page
```

## How to Run

1. Start the server:

   ```bash
   node server.js
   ```

2. Open your browser and visit:
   - http://localhost:3000/home
   - http://localhost:3000/about
   - http://localhost:3000/contact

## Available Routes

- `/home` - Home page
- `/about` - About page
- `/contact` - Contact page
- Any other route shows a 404 error page

## Requirements Met

- ✅ Uses Node.js HTTP module
- ✅ Server listens on port 3000
- ✅ Routes for /home, /about, /contact
- ✅ HTML pages for each route
- ✅ Proper HTTP status codes
- ✅ Asynchronous file reading
- ✅ Error handling with custom 404 page
