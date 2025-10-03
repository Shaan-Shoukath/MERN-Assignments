# Assignment 7: Planning APIs for My To-Do List App

## What I'm Building

I need to plan out all the APIs for a to-do list app. Basically, I need to figure out what endpoints I need so users can add tasks, view them, edit them, and delete them.

## The APIs I Need

### 1. Adding a New Task

**What it does:** When someone wants to add a new task to their list

**API Details:**

- **URL:** `POST /api/todos`
- **Why POST?** Because I'm creating something new

**What the user sends me:**

```json
{
  "text": "Do my homework"
}
```

**What It send back:**

```json
{
  "id": 1,
  "text": "Do my homework",
  "completed": false,
  "createdAt": "2025-10-03"
}
```

**How I'll make unique IDs:** I'll just use a simple counter that goes up by 1 each time (1, 2, 3, etc.) or maybe use the current timestamp.

### 2. Getting All My Tasks

**What it does:** Show me all the tasks I have in my list

**API Details:**

- **URL:** `GET /api/todos`
- **Why GET?** Because I'm just reading/getting information, not changing anything

**What the user sends:** Nothing! Just asks for the list

**What I send back:**

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

### 3. Getting One Specific Task

**What it does:** Get details about just one task (if I need to see just that one)

**API Details:**

- **URL:** `GET /api/todos/1` (where 1 is the task ID)
- **Why GET?** Again, just reading information

**What the user sends:** The ID in the URL (like /api/todos/1)

**What I send back:**

```json
{
  "id": 1,
  "text": "Do my homework",
  "completed": false,
  "createdAt": "2025-10-03"
}
```

### 4. Updating a Task

**What it does:** Change something about a task (like marking it done or editing the text)

**API Details:**

- **URL:** `PATCH /api/todos/1`
- **Why PATCH?** Because I'm updating/changing an existing task

**What the user sends:**

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

**What I send back:**

```json
{
  "id": 1,
  "text": "Do my homework - Math chapter 5",
  "completed": true,
  "createdAt": "2025-10-03"
}
```

### 5. Deleting a Task

**What it does:** Remove a task completely from my list

**API Details:**

- **URL:** `DELETE /api/todos/1`
- **Why DELETE?** Because I'm removing something permanently

**What the user sends:** Just the ID in the URL

**What I send back:**

```json
{
  "message": "Task deleted successfully"
}
```

## How These APIs Cover CRUD Operations

**CRUD** stands for Create, Read, Update, Delete - the basic things you can do with data:

| What I Want To Do     | HTTP Method | My API         | What It Does                   |
| --------------------- | ----------- | -------------- | ------------------------------ |
| **Create** a new task | POST        | `/api/todos`   | Add new task to my list        |
| **Read** all tasks    | GET         | `/api/todos`   | Show me all my tasks           |
| **Read** one task     | GET         | `/api/todos/1` | Show me just task #1           |
| **Update** a task     | PATCH       | `/api/todos/1` | Change something about task #1 |
| **Delete** a task     | DELETE      | `/api/todos/1` | Remove task #1 completely      |

So basically, with these 5 APIs, I can do everything I need for a basic to-do list!

## Why I Chose These APIs

### 1. Simple and Standard

I used the standard HTTP methods (GET, POST, PATCH, DELETE) because that's what most APIs use. It makes sense:

- GET = getting/reading data
- POST = creating new data
- PATCH = updating existing data
- DELETE = removing data

### 2. Easy URLs

All my URLs start with `/api/todos` because that's what my app is about - todos! Then I add the ID when I need to work with a specific task.

### 3. JSON Format

I chose JSON for sending and receiving data because:

- It's easy to read
- JavaScript works great with JSON
- Most web apps use JSON

## Problems I Might Run Into

### 1. Where to Store the Data

**Problem:** Where do I keep all the tasks when the server restarts? Right now they'll just disappear.

### 2. Making Unique IDs

**Problem:** How do I make sure each task gets a unique ID that doesn't conflict with others?

### 3. What if Someone Sends Bad Data

**Problem:** What if someone forgets to include the task text or sends empty data?

This should be enough to get a basic to-do list working!
