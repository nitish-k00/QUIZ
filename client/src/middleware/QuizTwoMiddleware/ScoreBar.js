import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ScoreBar({ grand_total, totalmark }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: 4,
        mb: 1,
        borderRadius: "12px",
        backgroundColor: "var(--three)",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        color: "var(--white)",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          color: "var(--black)",
          letterSpacing: "1px",
        }}
      >
        🎯 Total Score: {totalmark} / {grand_total}
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: "15px",
          backgroundColor: "var(--two)",
          borderRadius: "10px",
          mt: 2,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: totalmark < 1 ? "0%" : `${(totalmark / grand_total) * 100}%`,
            height: "100%",
            backgroundColor: "var(--four)",
            borderRadius: "10px",
            transition: "width 1s ease-in-out",
          }}
        />
      </Box>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: "8px",
            backgroundColor: "var(--four)",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            fontWeight: "bold",
            fontSize: "18px",
            color: "var(--black)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "var(--three)",
              transform: "scale(1.05)",
            },
            width: { xs: "100%", sm: "auto" },
            px: 4,
            py: 1.5,
          }}
          onClick={() => window.location.reload()}
        >
          🔄 Try Again
        </Button>

        <Button
          variant="contained"
          sx={{
            borderRadius: "8px",
            backgroundColor: "var(--four)",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            fontWeight: "bold",
            fontSize: "18px",
            color: "var(--black)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "var(--three)",
              transform: "scale(1.05)",
            },
            width: { xs: "100%", sm: "auto" },
            px: 4,
            py: 1.5,
          }}
          onClick={() => navigate("/")}
        >
          🏠 Home
        </Button>
      </Box>
    </Box>
  );
}

export default ScoreBar;
