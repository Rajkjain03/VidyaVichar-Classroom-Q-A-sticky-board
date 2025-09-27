# Frontend

### Step 1. Initialize Project and Install Dependencies

    npx create-react-app frontend
    cd frontend
    npm install axios(for API calls)

### Step 2. Create Components
    frontend/src/components/QuestionForm.js (for submitting new questions)


# Backend

## Step 1: Building backend

    Initialization: npm init -y
    Packages: npm install express mongoose cors dotenv

## Step 2: Design the Database Schema

    backend/src/models/questionModel.js (question text, author, status, and timestamp will be stored)

### Step 3: Create the API Controller

    backend/src/controllers/questionController.js to handle all the application logic, such as creating questions and updating their status

### Step 4: Define the API Routes

    Create backend/src/routes/questionRoutes.js to define the API endpoints.

## Step 5: Set up the Server and Database Connection

    backend/src/config/db.js (database connection)
    backend/server.js (Server logic)
    .env file in the backend to store MongoDB connection string.

