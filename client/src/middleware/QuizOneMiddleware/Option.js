import React from "react";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
  Typography,
} from "@mui/material";

function Option({
  option,
  questions,
  handleSelect,
  selectedAnswer,
  correct_answer,
}) {
  const isCorrect = option.id === correct_answer?.id;
  const isSelected = selectedAnswer === option?.id;

  return (
    <Box
      sx={{
        backgroundColor: isSelected ? (isCorrect ? "green" : "red") : "white",
        color: isSelected ? "white" : "black",
        padding: "8px",
        borderRadius: "8px",
        mb: 1,
        boxShadow: 2,
      }}
    >
      <RadioGroup>
        <FormControlLabel
          control={
            <Radio
              checked={selectedAnswer === option?.id}
              onChange={() => handleSelect(questions?.id, option?.id)}
              sx={{
                color: isSelected ? "white" : "primary.main",
              }}
            />
          }
          label={
            <Typography
              variant="body1"
              sx={{ fontWeight: isSelected ? "bold" : "normal" }}
            >
              {option?.description}
            </Typography>
          }
        />
      </RadioGroup>
    </Box>
  );
}

export default Option;
