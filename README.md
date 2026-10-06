# Assignment 7: API Planning & Documentation for To-Do List Application

## Project Overview
This repository contains the RESTful API design document and architecture for a To-Do List Application. The goal is to outline clean endpoints for full CRUD (Create, Read, Update, Delete) functionality while keeping security and scalability in mind.

---

## RESTful API Endpoints Summary

| Task Operation | HTTP Method | Endpoint Path | Description |
| :--- | :--- | :--- | :--- |
| **Create Task** | `POST` | `/api/tasks` | Adds a new task to the list |
| **Get All Tasks** | `GET` | `/api/tasks` | Retrieves all existing tasks |
| **Get Single Task** | `GET` | `/api/tasks/:id` | Fetches details of a specific task |
| **Update Task** | `PUT` | `/api/tasks/:id` | Modifies an existing task's title/status |
| **Delete Task** | `DELETE` | `/api/tasks/:id` | Removes a task permanently |

---

## Detailed API Specifications

### 1. Create a New Task
- **Endpoint:** `POST /api/tasks`
- **Description:** Creates a new task item with a unique auto-generated ID (timestamp + random string).
- **Request Body Format (JSON):**
  ```json
  {
    "title": "Complete MERN Stack Assignment 7",
    "completed": false
  }