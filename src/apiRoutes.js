// RESTful API route definitions and specifications for To-Do List App

const apiRoutes = [
  {
    id: 1,
    operation: "Create Task",
    method: "POST",
    endpoint: "/api/tasks",
    description: "Adds a new task to the list with a unique generated ID.",
    requestBody: { title: "String (Required)" },
    expectedResponse: { status: "success", data: "Task object" }
  },
  {
    id: 2,
    operation: "Get All Tasks",
    method: "GET",
    endpoint: "/api/tasks",
    description: "Fetches all saved tasks from the system.",
    requestBody: null,
    expectedResponse: { status: "success", count: "Number", data: "Array of tasks" }
  },
  {
    id: 3,
    operation: "Update Task",
    method: "PUT",
    endpoint: "/api/tasks/:id",
    description: "Updates the title or completion status of a task by ID.",
    requestBody: { completed: "Boolean" },
    expectedResponse: { status: "success", message: "Task updated" }
  },
  {
    id: 4,
    operation: "Delete Task",
    method: "DELETE",
    endpoint: "/api/tasks/:id",
    description: "Deletes a specific task permanently by ID.",
    requestBody: null,
    expectedResponse: { status: "success", message: "Task deleted" }
  }
];

module.exports = apiRoutes;