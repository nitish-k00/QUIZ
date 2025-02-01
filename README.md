# Quiz App

This is a **Quiz App** developed as a task assigned by **Testline** company. The app is built with React for the frontend and Express for the backend. It fetches quiz data from a remote API provided by the company and presents it to the user in two distinct formats:

1. **Single Page Quiz**  
   - All questions are displayed on a single page.
   - After submitting the quiz, detailed explanations for each answer are shown.
   - A progress bar indicates the user's completion status.

2. **Pagination Quiz**  
   - Each question is displayed on its own page.
   - Answers are revealed immediately upon selection.
   - Correct and incorrect answers trigger corresponding sound effects for real-time feedback.

## What I Have Done & Solved

- **Developed Two Quiz Formats:**  
  Created both Single Page and Pagination quiz formats to provide different user experiences.

- **CORS Issue Resolution:**  
  The company’s API did not support cross-origin requests directly from the frontend due to CORS restrictions.  
  **Solution:** I built a simple Express server that acts as a proxy. The server fetches data from the external API and returns it to the frontend, effectively bypassing the browser's CORS limitations.

- **Backend Proxy Server:**  
  Developed a backend server using Express and Axios. This server handles the external API request and responds to the frontend through a dedicated `/proxy` endpoint.

- **User Experience Enhancements:**  
  - Integrated Material-UI for modals and a responsive UI.
  - Implemented React Router for seamless navigation between quiz formats.
  - Added audio feedback for answer selection in the Pagination Quiz.

## Features

- Fetches quiz data from a backend server.
- Two quiz formats: **Single Page Quiz** and **Pagination Quiz**.
- Displays quiz instructions, detailed answer explanations, and scores.
- Timer functionality for each quiz.
- Responsive and user-friendly UI.
- Audio feedback for correct and wrong answers (Pagination Quiz).

## Technologies Used

### Frontend
- **React** – for building the user interface.
- **React Router** – for navigation between pages.
- **Axios** – for making API calls.
- **Material-UI** – for modals and other UI components.
- **React Icons** – for quiz-related icons.

### Backend
- **Express.js** – for handling API requests.
- **Axios** – for fetching data from an external API.
- **CORS Middleware** – for resolving cross-origin request issues.

### Others
- **CSS** – for custom styling and responsiveness.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/)
- npm

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

    This will start the app at:  
    **http://localhost:3000**

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

    The backend will run at:  
    **http://localhost:8000**

