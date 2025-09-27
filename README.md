# VidyaVichar - MERN Classroom Q&A Platform

VidyaVichar is a full-stack MERN application designed to facilitate Q&A in a classroom setting. It provides distinct interfaces for teachers and students. Teachers can create virtual classrooms, each with a unique join code. Students can use this code to join a class and ask questions, which are visible only to the teacher. This creates an organized and interruption-free learning environment.

---
## Solution Diagram

The application follows a standard client-server architecture. The React frontend communicates with the Express backend via a RESTful API, which in turn interacts with the MongoDB database.

+------------------+           HTTP Requests        +------------------+           DB Queries     +-----------------+
|                  |  (GET, POST, PATCH, DELETE)    |                  |  (find, create, save)    |                 |
|   React Client   | <------------------------------> |  Express Server  | <----------------------> |    MongoDB      |
| (localhost:3000) |                                | (localhost:5000) |                          | (Atlas/Local)   |
|                  |                                |                  |                          |                 |
+------------------+                                +------------------+                          +-----------------+


---
## Design Decisions

Several key decisions were made to shape the application's architecture and user experience:

* *JWT-Based Authentication*: To secure the application and manage user sessions, JSON Web Tokens (JWT) are used. Upon successful login, the backend issues a token that the frontend stores and sends in the Authorization header for all protected API requests.

* *Role-Based Access Control (RBAC)*: The system is built around two distinct roles: 'teacher' and 'student'. Backend middleware protects sensitive endpoints, ensuring that only users with the 'teacher' role can create classes, view all questions, and manage question statuses.

* *Centralized State Management: The frontend uses **Redux Toolkit* for predictable and centralized state management. This handles the global user authentication state, classroom data, and questions, simplifying data flow and keeping the UI in sync.

* *Data Integrity*: To maintain a clean Q&A board, the backend API prevents duplicate questions from being posted within the same classroom. The check is case-insensitive for a more user-friendly experience.

---
## Tech Stack

### Backend
* *Node.js*: JavaScript runtime environment
* *Express.js*: Web application framework for Node.js
* *MongoDB*: NoSQL database for storing data
* *Mongoose*: Object Data Modeling (ODM) library for MongoDB
* *JSON Web Token (JWT)*: For user authentication
* *bcrypt.js*: For hashing passwords

### Frontend
* *React*: JavaScript library for building user interfaces
* *Redux Toolkit*: For efficient and predictable state management
* *React Router*: For client-side routing and navigation
* *Axios*: For making HTTP requests to the backend API

---
## Set-up and Installation Steps

To run this project locally, you will need Node.js and MongoDB installed on your machine. You will need to run the backend and frontend servers in two separate terminals.

### 1. Backend Server

1.  Navigate to the backend directory:
    bash
    cd backend
    
2.  Install the necessary dependencies:
    bash
    npm install
    
3.  Create a .env file in the root of the backend folder. Add the following variables, replacing the placeholders with your own values:
    ini
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_jwt_key
    
4.  Start the backend server:
    bash
    npm start
    
    The server should now be running on http://localhost:5000.

### 2. Frontend Client

1.  Navigate to the frontend directory in a new terminal:
    bash
    cd frontend
    
2.  Install the necessary dependencies:
    bash
    npm install
    
3.  Start the frontend development server:
    bash
    npm start
    
    The React application will open automatically in your browser at http://localhost:3000.