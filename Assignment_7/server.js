const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

/***
 * Route: GET /api/todos/
 * Method: GET
 * Description: Get all todos
 * Access: Public
 * Parameters: None
 * Returns: JSON message
 */
app.get("/api/todos", (req, res) => {
  res.json({ message: "Get all todos" });
});

/***
 * Route: /api/todos/:id
 * Method: GET
 * Description: Get a specific todo by ID
 * Access: Public
 * Parameters: None
 * Returns: JSON message
 */
app.get("/api/todos/:id", (req, res) => {
  res.json({ message: "Get todo by ID" });
});

/***
 * Route: /api/todos/
 * Method: POST
 * Description: Create a new todo task
 * Access: Public
 * Parameters: Request body should include: { "text": "task description", "completed": false }
 * Returns: JSON message with created task
 */
app.post("/api/todos", (req, res) => {
  res.json({
    message: "Create new todo",
    expectedBody: { text: "string", completed: "boolean" },
  });
});

/***
 * Route: /api/todos/:id
 * Method: PATCH
 * Description: Update a todo
 * Access: Public
 * Parameters: None
 * Returns: JSON message
 */
app.patch("/api/todos/:id", (req, res) => {
  res.json({ message: "Update todo" });
});

/***
 * Route: /api/todos/:id
 * Method: DELETE
 * Description: Delete a todo
 * Access: Public
 * Parameters: None
 * Returns: JSON message
 */
app.delete("/api/todos/:id", (req, res) => {
  res.json({ message: "Delete todo" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
