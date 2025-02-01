import React, { useState } from "react";
import { Modal } from "@mui/material";
import "../style/startingpage.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdQuiz } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function StartPage({ questions, response }) {
  const [open, setOpen] = useState(false);
  const [quizType, setQuizType] = useState("");
  const navigate = useNavigate();

  const handleOpen = (type) => {
    setQuizType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStartQuiz = () => {
    setOpen(false);
    navigate(quizType === "single" ? "/quizone" : "/quiztwo");
  };

  return (
    <div className="box">
      <div className="home-container">
        <div className="welcome-message">
          <h1 className="animated-text">Welcome to the Quiz App</h1>
          <p className="animated-text">
            Get ready to challenge your knowledge with fun quizzes!
          </p>
        </div>
        <div className="actions">
          <button className="start-button" onClick={() => handleOpen("single")}>
            <MdQuiz className="button-icon" /> Single Page Quiz
          </button>
          <button
            className="learn-more-button"
            onClick={() => handleOpen("pagination")}
          >
            <MdQuiz className="button-icon" /> Pagination Quiz
          </button>
        </div>

        <h2 className="name">NITISH K</h2>

        <Modal open={open} onClose={handleClose}>
          <div className="modal-container">
            <div className="modal-header">
              <AiOutlineInfoCircle className="modal-icon" />
              <h2>
                {quizType === "single"
                  ? "Single Page Quiz Instructions"
                  : "Pagination Quiz Instructions"}
              </h2>
            </div>
            <p className="quiz-instructions">
              <span className="instruction-item">
                <strong>Total Questions: {questions?.length}</strong>
              </span>
              <span className="instruction-item">
                <strong>Time: {response.duration} min</strong>
              </span>
              <span className="instruction-item">
                <strong>
                   Correct Answer: {response.correct_answer_marks}
                </strong>
              </span>
              <span className="instruction-item">
                <strong>Negative Marks: -{response.negative_marks}</strong>
              </span>
            </p>

            <div className="modal-buttons">
              <button onClick={handleStartQuiz} className="start-quiz-btn">
                Start Quiz
              </button>
              <button
                onClick={handleClose}
                color="primary"
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default StartPage;
