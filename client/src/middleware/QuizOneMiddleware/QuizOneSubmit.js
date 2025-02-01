import React from "react";
import Confetti from "react-confetti";
import { Card, Typography, Button, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function QuizOneSubmit({ response, mark, questions }) {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        background: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
        borderRadius: "10px",
        padding: "20px",
        position: "relative",
      }}
    >
      <Confetti gravity={0.8} recycle={false} />
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#fff" }}>
          Congratulations!
        </Typography>
        <Typography variant="h6" sx={{ color: "#fff", mt: 1 }}>
          You’ve successfully completed the quiz!
        </Typography>
      </Box>

      <Card
        sx={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#4caf50" }}>
          Your Score
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "#2196f3", fontWeight: "600", mt: 2 }}
        >
          {mark} / {questions.length * response?.correct_answer_marks}
        </Typography>

        <Typography variant="body1" sx={{ color: "#757575", mt: 3 }}>
          Great job! You’ve earned a score of {mark}, but there's always room to
          improve. Keep learning!
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "10px 20px",
              width: "150px",
              fontSize: "16px",
              borderRadius: "8px",
            }}
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "10px 20px",
              width: "150px",
              fontSize: "16px",
              borderRadius: "8px",
              marginLeft: "30px",
            }}
            onClick={() => navigate("/")}
          >
            home
          </Button>
        </Box>
      </Card>
    </Container>
  );
}

export default QuizOneSubmit;
