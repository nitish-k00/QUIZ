import React, { useEffect, useState } from "react";
import marks from "../middleware/QuizTwoMiddleware/Totalmarks";
import { Container, Typography, Button, Card, Box } from "@mui/material";

import Popup from "../middleware/QuizTwoMiddleware/Popup";
import ScoreBar from "../middleware/QuizTwoMiddleware/ScoreBar";
import Question from "../middleware/QuizTwoMiddleware/Question";
import Loading from "../middleware/QuizTwoMiddleware/Loading";

function QuizTwo({ questions, response }) {
  const [answers, setAnswers] = useState({});
  const [select, setSelect] = useState(false);
  const [selected, setSelected] = useState(false);
  const [totalmark, setTotalmark] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(response?.duration * 60 || 900);
  const [openPopup, setOpenPopup] = useState(false);
  const [showExplanation, setShowExplanation] = useState({});
  const [showAnswer, setShowAnswer] = useState({});
  const grand_total = questions.length * response.correct_answer_marks;

  useEffect(() => {
    if (timer > 0 && !submitted) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      onClickSubmit();
    }
  }, [timer, submitted]);

  useEffect(() => {
    if (questions.length > 0) {
      const prevAnswers = {};
      questions.forEach((_, index) => {
        prevAnswers[index] = null;
      });
      setAnswers(prevAnswers);
    }
  }, [questions]);

  const onChange_setAnswers = (index, ans_id, question_id, is_correct) => {
    if (!submitted) {
      setAnswers((prev) => ({
        ...prev,
        [index]: { question_id, ans_id, is_correct },
      }));
    }
  };

  const onClickSubmit = () => {
    let allAnswered = true;
    for (const key in answers) {
      if (answers[key] === null) {
        setSelect(true);
        document.getElementById(key)?.scrollIntoView({ behavior: "smooth" });
        allAnswered = false;
        break;
      }
    }

    if (allAnswered) {
      setSelect(false);
      setSelected(true);
      setSubmitted(true);
      setTotalmark(marks(answers, response));
      setOpenPopup(true);
      setTimeout(() => {
        setOpenPopup(false);
      }, 5000);
    }
  };

  const toggleExplanation = (index) => {
    setShowExplanation((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleAnswer = (index) => {
    setShowAnswer((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div style={{ backgroundColor: "var(--three)", padding: "20px 0px" }}>
      <Container
        maxWidth="md"
        sx={{
          transition: "all 0.3s ease",
        }}
      >
        {questions.length > 0 ? (
          <Card
            sx={{
              p: 5,
              boxShadow: 10,
              borderRadius: 3,
              backgroundColor: "var(--one)",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              fontWeight="bold"
              color="var(--four)"
              gutterBottom
              sx={{ letterSpacing: 2 }}
            >
              {response.title}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="var(--white)"
              sx={{ mb: 2 }}
            >
              {response.topic}
            </Typography>

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
            >
              {!submitted && (
                <Typography variant="h6" fontWeight="900" color="var(--white)">
                  ⏳ Time Left: {Math.floor(timer / 60)}:
                  {String(timer % 60).padStart(2, "0")}
                </Typography>
              )}

              {totalmark !== null && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <ScoreBar totalmark={totalmark} grand_total={grand_total} />
                </div>
              )}
            </Box>
            <Question
              questions={questions}
              answers={answers}
              onChange_setAnswers={onChange_setAnswers}
              submitted={submitted}
              selected={selected}
              toggleExplanation={toggleExplanation}
              showExplanation={showExplanation}
              toggleAnswer={toggleAnswer}
              showAnswer={showAnswer}
              select={select}
            />
            <Box sx={{ mt: 4, textAlign: "center" }}>
              {!submitted && (
                <Button
                  variant="contained"
                  color="var(--black)"
                  sx={{
                    padding: "12px 24px",
                    width: "180px",
                    fontSize: "16px",
                    fontWeight: "900",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "var(--four)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      backgroundColor: "var(--three)",
                      transform: "scale(1.05)",
                      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                    },
                    "&:active": {
                      transform: "scale(1)",
                    },
                  }}
                  onClick={onClickSubmit}
                >
                  Submit Quiz
                </Button>
              )}
            </Box>
          </Card>
        ) : (
          <Loading />
        )}

        {openPopup && (
          <Popup
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            totalmark={totalmark}
            grand_total={grand_total}
          />
        )}
      </Container>
    </div>
  );
}

export default QuizTwo;
