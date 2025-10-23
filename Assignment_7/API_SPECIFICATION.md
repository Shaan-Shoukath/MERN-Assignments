# To-Do List API Specification

## Project Overview

This document outlines the API design for a comprehensive to-do list application. The API provides endpoints for managing tasks with full CRUD operations and additional functionality for filtering, statistics, and bulk operations.

## API Endpoints

### 1. Create New Task

**Description:** Creates a new task in the to-do list

**API Details:**

- **URL:** `POST /api/todos`
- **Why POST?** Because I'm creating something new

**Request Body:**

```json
{
  "text": "Do my homework"
}
```

**Response:**

```json
{
  "id": 1,
  "text": "Do my homework",
  "completed": false,
  "createdAt": "2025-10-03"
}
```

### 2. Get All Tasks

**Description:** Retrieves all tasks in the to-do list

**API Details:**

- **URL:** `GET /api/todos`
- **Why GET?** Because I'm just reading/getting information, not changing anything

**Request Body:** None

**Response:**

```json
[
  {
    "id": 1,
    "text": "Do my homework",
    "completed": false,
    "createdAt": "2025-10-03"
  },
  {
    "id": 2,
    "text": "Walk the dog",
    "completed": true,
    "createdAt": "2025-10-02"
  }
]
```

### 3. Get Single Task

**Description:** Retrieves a specific task by its ID

**API Details:**

- **URL:** `GET /api/todos/1` (where 1 is the task ID)
- **Why GET?** Again, just reading information

**Request Body:** None

**Response:**

```json
{
  "id": 1,
  "text": "Do my homework",
  "completed": false,
  "createdAt": "2025-10-03"
}
```

### 4. Update Task

**Description:** Updates an existing task

**API Details:**

- **URL:** `PATCH /api/todos/1`
- **Why PATCH?** For partial updates of existing resources

**Request Body:**

```json
{
  "completed": true
}
```

OR

```json
{
  "text": "Do my homework - Math chapter 5"
}
```

**Response:**

```json
{
  "id": 1,
  "text": "Do my homework - Math chapter 5",
  "completed": true,
  "createdAt": "2025-10-03"
}
```

### 5. Delete Task

**Description:** Permanently removes a task from the list

**API Details:**

- **URL:** `DELETE /api/todos/1`
- **Why DELETE?** Because I'm removing something permanently

**Request Body:** None

**Response:**

```json
{
  "message": "Task deleted successfully"
}
```

## How These APIs Cover CRUD Operations

**CRUD** stands for Create, Read, Update, Delete - the basic things you can do with data:

| Operation             | HTTP Method | Endpoint       | Description              |
| --------------------- | ----------- | -------------- | ------------------------ |
| **Create** a new task | POST        | `/api/todos`   | Add new task to the list |
| **Read** all tasks    | GET         | `/api/todos`   | Retrieve all tasks       |
| **Read** one task     | GET         | `/api/todos/1` | Retrieve specific task   |
| **Update** a task     | PATCH       | `/api/todos/1` | Modify existing task     |
| **Delete** a task     | DELETE      | `/api/todos/1` | Remove task permanently  |

These 5 core endpoints provide complete CRUD functionality for the to-do list application.

## API Design Principles

### 1. RESTful Standards

The API follows standard HTTP methods for intuitive operation:

- GET = retrieving/reading data
- POST = creating new resources
- PATCH = updating existing resources
- DELETE = removing resources

### 2. Consistent URL Structure

All endpoints follow a consistent pattern starting with `/api/todos`, with resource IDs appended for specific operations.

### 3. JSON Data Format

JSON is used for all request and response bodies because:

- It's lightweight and easy to parse
- Native JavaScript support
- Industry standard for web APIs

## Implementation Considerations

### 1. Data Persistence

**Challenge:** Implementing persistent storage for tasks across server restarts.
**Solutions:** Database integration (MongoDB, PostgreSQL) or file-based storage.

### 2. Unique Identifiers

**Challenge:** Generating unique IDs for each task.
**Solutions:** Auto-incrementing database IDs, UUIDs, or timestamp-based IDs.

### 3. Data Validation

**Challenge:** Ensuring incoming data is valid and complete.
**Solutions:** Input validation middleware, schema validation, and error handling.

### 4. Error Handling

**Challenge:** Providing meaningful error responses.
**Solutions:** Standardized error formats, appropriate HTTP status codes, and descriptive messages.

This API specification provides a solid foundation for building a robust to-do list application.
