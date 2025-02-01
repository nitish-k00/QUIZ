# Quiz App

A simple and interactive quiz app built with React for the frontend and Express for the backend. The app fetches quiz data from a remote API and presents it to the user in two formats: Single Page Quiz and Pagination Quiz.

## Features

- Fetches quiz data from a backend server.
- Two quiz formats: **Single Page Quiz** and **Pagination Quiz**.
- Displays quiz instructions and scores.
- Timer functionality for each quiz.
- Responsive and user-friendly UI.

## Technologies Used

### Frontend
- React
- React Router for navigation
- Axios for API calls
- Material-UI for modal and other UI components
- React Icons for quiz icons

### Backend
- Express.js
- Axios for external API requests
- CORS middleware for handling cross-origin requests

### Others
- CSS for custom styling

## Installation

### Prerequisites
- Node.js
- npm or yarn

### Frontend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/nitish-k00/QUIZ.git
    ```

2. Navigate to the frontend directory:

    ```bash
    cd client
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the frontend development server:

    ```bash
    npm start
    ```

    This will start the app on `http://localhost:3000`.

### Backend Setup

1. Navigate to the backend directory:

    ```bash
    cd server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the backend server:

    ```bash
    npm run dev
    ```

    The backend will run on `http://localhost:8000`.


