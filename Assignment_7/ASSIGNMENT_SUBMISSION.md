# Assignment 7: Identifying APIs for To-Do List App

## Objective

Identify and plan the necessary APIs for a To-Do List app. Focus on outlining the key functionalities and endpoints required for all operations in the app.

---

## APIs Needed for To-Do List App

### 1. Add Task

**API Endpoint:** `POST /api/todos`  
**HTTP Method:** POST

**Request Body:**

```json
{
  "text": "Complete homework",
  "completed": false
}
```

**Expected Response:**

```json
{
  "id": 1,
  "text": "Complete homework",
  "completed": false,
  "createdAt": "2024-10-10"
}
```

**Reasoning:** POST method creates new resources. I need this API so users can add new tasks to their list.

**Unique Identifier Logic:** The server will automatically generate a unique ID for each task using auto-incrementing numbers (1, 2, 3, etc.) or timestamps to ensure no two tasks have the same ID.

---

### 2. View All Tasks

**API Endpoint:** `GET /api/todos`  
**HTTP Method:** GET

**Request Body:** None

**Expected Response:**

```json
[
  {
    "id": 1,
    "text": "Complete homework",
    "completed": false,
    "createdAt": "2024-10-10"
  },
  {
    "id": 2,
    "text": "Buy groceries",
    "completed": true,
    "createdAt": "2024-10-09"
  }
]
```

**Reasoning:** GET method retrieves data without changing anything. I need this API to show users all their tasks in a list.

---

### 3. View Single Task

**API Endpoint:** `GET /api/todos/:id`  
**HTTP Method:** GET

**Request Body:** None

**Expected Response:**

```json
{
  "id": 1,
  "text": "Complete homework",
  "completed": false,
  "createdAt": "2024-10-10"
}
```

**Reasoning:** GET method for reading one specific task. I need this when users want to see details of just one task or edit it.

---

### 4. Update Task

**API Endpoint:** `PATCH /api/todos/:id`  
**HTTP Method:** PATCH

**Request Body:**

```json
{
  "text": "Complete homework - Math only",
  "completed": true
}
```

**Expected Response:**

```json
{
  "id": 1,
  "text": "Complete homework - Math only",
  "completed": true,
  "createdAt": "2024-10-10"
}
```

**Reasoning:** PATCH method updates existing tasks. I need this so users can edit their task text or mark tasks as complete/incomplete.

---

### 5. Delete Task

**API Endpoint:** `DELETE /api/todos/:id`  
**HTTP Method:** DELETE

**Request Body:** None

**Expected Response:**

```json
{
  "message": "Task deleted successfully"
}
```

**Reasoning:** DELETE method removes tasks permanently. I need this so users can delete tasks they no longer need.

---

---

## How These APIs Cover CRUD Operations

**CRUD** stands for Create, Read, Update, Delete - the basic operations for managing data:

| Operation  | HTTP Method | API Endpoint     | What It Does                          |
| ---------- | ----------- | ---------------- | ------------------------------------- |
| **Create** | POST        | `/api/todos`     | Add new task to the list              |
| **Read**   | GET         | `/api/todos`     | Get all tasks                         |
| **Read**   | GET         | `/api/todos/:id` | Get one specific task                 |
| **Update** | PATCH       | `/api/todos/:id` | Change task text or completion status |
| **Delete** | DELETE      | `/api/todos/:id` | Remove task from the list             |

With these 5 APIs, users can do everything they need for a complete to-do list app - add tasks, view them, edit them, and delete them.

---

## Potential Implementation Challenges

### 1. **Data Storage**

**Challenge:** Where to store the tasks when the server restarts?
**Solution:** Use a database like MongoDB or PostgreSQL to save tasks permanently.

### 2. **Unique IDs**

**Challenge:** How to make sure each task gets a unique ID?
**Solution:** Use auto-incrementing numbers from the database or generate unique timestamps.

### 3. **Data Validation**

**Challenge:** What if users send empty or invalid data?
**Solution:** Check that task text is not empty and validate data before saving.

### 4. **User Authentication**

**Challenge:** How to make sure users only see their own tasks?
**Solution:** Add user login system and associate each task with a user ID.

### 5. **Error Handling**

**Challenge:** What to do when something goes wrong?
**Solution:** Send clear error messages with proper status codes (404 for not found, 500 for server errors).

---

## How These APIs Work

### **Simple Workflow:**

1. **User Action:** User clicks a button in the React app (like "Add Task")
2. **API Call:** React sends a request to the appropriate API endpoint
3. **Server Processing:** Server receives the request and processes it
4. **Database:** Server saves/retrieves/updates/deletes data in the database
5. **Response:** Server sends back the result to React
6. **UI Update:** React updates the screen to show the changes

### **Example Flow - Adding a Task:**

1. User types "Buy milk" and clicks "Add"
2. React sends `POST /api/todos` with `{"text": "Buy milk", "completed": false}`
3. Server creates new task with ID 1
4. Server responds with `{"id": 1, "text": "Buy milk", "completed": false}`
5. React adds the new task to the list on screen

### **Why RESTful Design:**

- **Easy to understand:** Standard HTTP methods (GET, POST, PATCH, DELETE)
- **Consistent URLs:** All todo operations use `/api/todos`
- **Works with React:** Easy to call from React components
- **Industry standard:** Most web APIs work this way

These APIs provide everything needed for a complete to-do list app that works smoothly with React.js.
