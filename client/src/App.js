import QuizOne from "./component/QuizOne";
import axios from "axios";
import React, { useEffect, useState } from "react";
import StartPage from "./component/StartPage";
import QuizTwo from "./component/QuizTwo";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/Root.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [response, setResponse] = useState({});

  const Quiz_Data = async () => {
    try {
      const response = await axios.get("/Uw5CrX");

      let shuffledQuestions = [...response.data.questions];
      for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [
          shuffledQuestions[j],
          shuffledQuestions[i],
        ];
      }
      setQuestions(shuffledQuestions);
      setResponse({
        correct_answer_marks: response.data.correct_answer_marks,
        negative_marks: response.data.negative_marks,
        duration: response.data.duration,
        title: response.data.title,
        topic: response.data.topic,
      });
    } catch (error) {}
  };

  useEffect(() => {
    Quiz_Data();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<StartPage questions={questions} response={response} />}
          ></Route>
          <Route
            path="/quizone"
            element={<QuizOne questions={questions} response={response} />}
          ></Route>
          <Route
            path="/quiztwo"
            element={<QuizTwo questions={questions} response={response} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
