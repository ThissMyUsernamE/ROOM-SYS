# 🎓 Room Reservation System (ROOM-SYS)

## 🎯 Project Overview

ROOM-SYS is a web-based application designed to **optimize room utilization** at the Conservatory by providing a real-time, centralized platform for room occupancy tracking and reservation management.

### Key Features (MVP)
* **Conflict Prevention:** Automated checking to prevent double bookings.
* **Calendar View:** Clear visualization of room schedules for teachers and students.
* **User Roles:** Differentiation between Admin, Teacher, and Read-Only Guest access.

## 💻 Tech Stack & Architecture

This project uses a modern **decoupled architecture** (Frontend communicates with Backend API). The entire development environment runs within **WSL (Ubuntu)** on Windows for maximum performance and consistency.

| Component | Technology | Role |
| :--- | :--- | :--- |
| **Backend API** | **Python (Flask)** | Lightweight REST API for handling data, business logic, and user authentication. |
| **ORM/Database** | **Flask-SQLAlchemy / SQLite** | Object-Relational Mapper for data persistence. SQLite is used for development. |
| **Frontend** | **React (Vite)** | Single Page Application (SPA) for the dynamic user interface. |
| **Package Management** | **`venv`** (Python) & **`npm`** (Node/JS) | Isolation and management of project dependencies. |

## 🚀 Getting Started (How to Run)

To run the application, you must start both the Backend API and the Frontend development server.

### 1. Backend API (Flask)

The Flask API runs on port **5000** and requires the Python virtual environment (`venv`) to be active.

**Commands (run in project root `classroom/`):**

1.  **Activate Virtual Environment:**
    ```bash
    source venv/bin/activate
    ```
    *(Your terminal prompt will change to `(venv)`)*

2.  **Run Flask Development Server:**
    ```bash
    python main.py 
    ```
    *Test API endpoint: `http://127.0.0.1:5000/rooms/status`*

### 2. Frontend (React)

The React development server runs on a separate port (typically **5173**) and communicates with the Flask API.

**Commands (run in the `frontend/` directory):**

1.  **Navigate to Frontend:**
    ```bash
    cd frontend
    ```

2.  **Run React Development Server:**
    ```bash
    npm run dev
    ```
    *Open the URL provided in the console (e.g., `http://localhost:5173`) in your browser.*
