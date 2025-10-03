# To-Do List API

A simple REST API for managing to-do tasks built with Express.js and React.

## What it does

This project provides a backend API server for a to-do list application with the following functionality:

- **Get all todos** - Retrieve a list of all to-do items
- **Get specific todo** - Retrieve a single to-do item by ID
- **Create new todo** - Add a new to-do item with text and completion status
- **Update todo** - Modify an existing to-do item
- **Delete todo** - Remove a to-do item from the list

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| GET | `/api/todos/:id` | Get a specific todo by ID |
| POST | `/api/todos` | Create a new todo |
| PATCH | `/api/todos/:id` | Update a todo |
| DELETE | `/api/todos/:id` | Delete a todo |

### Request Format for Creating Todos

```json
{
  "text": "Task description",
  "completed": false
}
```

## Getting Started

### Prerequisites

- Node.js installed on your system

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server

Start the API server:
```bash
npm run server
```
or
```bash
npm start
```

The server will run on `http://localhost:3001`

### Development

For frontend development with Vite:
```bash
npm run dev
```

## Tech Stack

- **Backend**: Express.js
- **Frontend**: React with Vite
- **Development**: ESLint for code linting

## Note

This is currently a basic API structure that returns placeholder messages. The endpoints are set up but not yet connected to a database or persistent storage.