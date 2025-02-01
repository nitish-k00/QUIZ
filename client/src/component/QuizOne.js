import React, { useEffect, useState } from "react";
import Option from "../middleware/QuizOneMiddleware/Option";
import RemaingQ from "../middleware/QuizOneMiddleware/RemaingQ";
import Confetti from "react-confetti";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Box,
  Skeleton,
} from "@mui/material";
import QuizOneSubmit from "../middleware/QuizOneMiddleware/QuizOneSubmit";

function QuizOne({ questions, response }) {
  const [page, setPage] = useState(0);
  const [answer, setAnswer] = useState({});
  const [correctAns, setCorrectAns] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [mark, setMark] = useState(0);
  const [submited, setSubmited] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const total_page = questions.length - 1;

  const showAns = answer[questions[page]?.id] && correctAns;

  const onClickNextPage = () =>
    setPage((prev) => Math.min(prev + 1, total_page));
  const onClickPreviousPage = () => setPage((prev) => Math.max(prev - 1, 0));

  const handleSelect = (questionId, optionId) => {
    const audio_correct = new Audio("/correct.mp3");
    const audio_wrong = new Audio("error.mp3");
    if (!answer[questionId]) {
      setAnswer((prev) => ({ ...prev, [questionId]: optionId }));
    }
    setShowConfetti(correctAns.id === optionId);
    if (correctAns.id === optionId) {
      setMark((w) => w + Number(response?.correct_answer_marks));
      audio_correct.play();
    } else {
      setMark((w) => w - Number(response?.negative_marks));
      audio_wrong.play();
    }
  };

  const correct_answer = () => {
    const currentQuestion = questions[page];
    const correct = currentQuestion?.options?.find(
      (data) => data.is_correct === true
    );
    setCorrectAns(correct);
  };

  const onClickSubmit = () => {
    if (Object.keys(answer).length !== total_page + 1) {
      setOpenPopup(true);
    } else {
      setSubmited(true);
      const submit = new Audio("/submit.mp3");
      submit.play();
    }
  };

  useEffect(() => {
    correct_answer();
  }, [page, questions]);

  useEffect(() => {
    setShowConfetti(false);
  }, [page]);

  if (submited) {
    return (
      <QuizOneSubmit mark={mark} questions={questions} response={response} />
    );
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--two)",
        paddingTop: "20px",
        paddingBottom: "40px",
        minHeight: "100vh",
      }}
    >
      <Card
        sx={{
          p: 2,
          maxWidth: 450,
          width: "100%",
          textAlign: "center",
          borderRadius: "30px",
          backgroundColor: "var(--four)",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "var(--three)",
            minHeight: "70vh",
            position: "relative",
            borderRadius: "15px",
          }}
        >
          {showConfetti && <Confetti gravity={2} recycle={false} />}
          <Box>
            {questions[page]?.description ? (
              <Typography gutterBottom sx={{ textAlign: "left" }}>
                <p style={{ fontWeight: "900" }}>
                  {questions[page]?.description}
                </p>
              </Typography>
            ) : (
              <Skeleton variant="text" width="100%" height={200} />
            )}
          </Box>

          <Box>
            {questions[page]?.options ? (
              questions[page]?.options.map((option) => (
                <Option
                  key={option.id}
                  option={option}
                  questions={questions[page]}
                  handleSelect={handleSelect}
                  selectedAnswer={answer[questions[page].id]}
                  correct_answer={correctAns}
                />
              ))
            ) : (
              <>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={50}
                  sx={{ marginBottom: 1 }}
                />
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={50}
                  sx={{ marginBottom: 1 }}
                />
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={50}
                  sx={{ marginBottom: 1 }}
                />
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={50}
                  sx={{ marginBottom: 1 }}
                />
              </>
            )}
          </Box>

          <Box>
            <Typography
              color="success.main"
              className="crtAns"
              sx={{
                backgroundColor: showAns && "var(--white)",
                marginTop: " 10px",
                borderRadius: "20px",
                fontWeight: " 900",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: showAns && "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
            >
              {showAns && ` Correct Answer: ${correctAns?.description}`}
            </Typography>
          </Box>

          <Box mt={3} display="flex" justifyContent="space-between">
            {page > 0 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={onClickPreviousPage}
              >
                Previous
              </Button>
            ) : (
              <Button disabled="true"></Button>
            )}

            {questions?.length > 0 && (
              <Typography sx={{ color: "var(--one)", fontWeight: "900" }}>
                {page + 1} / {total_page + 1}
              </Typography>
            )}

            {total_page > page && (
              <Button
                variant="contained"
                color="primary"
                onClick={onClickNextPage}
              >
                Next
              </Button>
            )}
            {total_page === page && (
              <Button
                variant="contained"
                color="success"
                onClick={onClickSubmit}
              >
                Submit
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
      <RemaingQ
        setOpenPopup={setOpenPopup}
        openPopup={openPopup}
        reaming={total_page + 1 - Object.keys(answer).length}
      />
    </Container>
  );
}

export default QuizOne;
