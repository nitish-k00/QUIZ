import React from "react";
import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Card,
  CardContent,
  Box,
} from "@mui/material";

function Question({
  questions,
  answers,
  onChange_setAnswers,
  submitted,
  selected,
  toggleExplanation,
  showExplanation,
  toggleAnswer,
  showAnswer,
  select,
}) {
  return (
    <div>
      <Box sx={{ mt: 3 }}>
        {questions.map((data, index) => {
          const correctOption = data.options.find((opt) => opt.is_correct);
          return (
            <Card
              key={data.id}
              id={index}
              sx={{
                mb: 2,
                p: 3,
                boxShadow: 3,
                bgcolor: "#fafafa",
                borderRadius: 3,
                "&:hover": {
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {index + 1}. {data.description}
                </Typography>

                <RadioGroup
                  value={answers[index]?.ans_id || ""}
                  onChange={(e) => {
                    const selectedOption = data.options.find(
                      (opt) => opt.id === Number(e.target.value)
                    );
                    onChange_setAnswers(
                      index,
                      e.target.value,
                      data.id,
                      selectedOption?.is_correct
                    );
                  }}
                >
                  {data.options.map((opt) => (
                    <FormControlLabel
                      key={opt.id}
                      value={opt.id}
                      disabled={submitted}
                      control={<Radio />}
                      label={
                        <Typography
                          sx={{
                            fontWeight: 600,
                            color:
                              selected &&
                              Number(answers[index]?.ans_id) === opt.id
                                ? answers[index]?.is_correct
                                  ? "green"
                                  : "red"
                                : "black",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              cursor: "pointer",
                              color: "var(--two)",
                            },
                          }}
                        >
                          {opt.description}
                        </Typography>
                      }
                    />
                  ))}
                </RadioGroup>

                {select && answers[index] === null && (
                  <Typography color="error" variant="body2">
                    ⚠ Please select an answer
                  </Typography>
                )}
              </CardContent>

              {submitted && (
                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => toggleExplanation(index)}
                    sx={{
                      mr: 2,
                      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {showExplanation[index]
                      ? "Hide Explanation"
                      : "Show Explanation"}
                  </Button>

                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => toggleAnswer(index)}
                    sx={{
                      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {showAnswer[index] ? "Hide Answer" : "Show Answer"}
                  </Button>
                </Box>
              )}

              {submitted && showExplanation[index] && (
                <CardContent
                  sx={{
                    bgcolor: "#f5f5f5",
                    borderRadius: 2,
                    mt: 2,
                    boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontStyle: "italic", color: "text.secondary" }}
                  >
                    {data.detailed_solution}
                  </Typography>
                </CardContent>
              )}

              {submitted && showAnswer[index] && correctOption && (
                <CardContent
                  sx={{
                    bgcolor: "#e0f7fa",
                    borderRadius: 2,
                    mt: 2,
                    boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography
                    variant="body1"
                    color="success.main"
                    fontWeight="bold"
                  >
                    Correct Answer: {correctOption.description}
                  </Typography>
                </CardContent>
              )}
            </Card>
          );
        })}
      </Box>
    </div>
  );
}

export default Question;
