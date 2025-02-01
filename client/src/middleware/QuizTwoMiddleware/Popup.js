import React from "react";
import Confetti from "react-confetti";
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Button,
} from "@mui/material";

function Popup({ setOpenPopup, totalmark, grand_total, openPopup }) {
  return (
    <div style={{ position: "relative" }}>
      <Dialog
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        maxWidth="sm"
        fullWidth
      >
        <Confetti gravity={1} recycle={false} />
        <DialogTitle>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            fontWeight="bold"
            sx={{ letterSpacing: 2 }}
          >
            🎉 Congratulations!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="h5" color="secondary" fontWeight="bold">
              You’ve Completed the Quiz!
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
              Your Score:{" "}
              <span style={{ color: "#4caf50", fontWeight: "bold" }}>
                {totalmark}
              </span>{" "}
              /{" "}
              <span style={{ color: "#1976d2", fontWeight: "bold" }}>
                {grand_total}
              </span>
            </Typography>

            <Typography variant="body1" sx={{ mt: 3 }} color="text.secondary">
              {totalmark === grand_total
                ? "Excellent! You've answered all questions correctly! 🎯"
                : totalmark / grand_total >= 0.8
                ? "Great job! You're almost there! 🌟"
                : "Nice try! Keep practicing to improve your score! 💪"}
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setOpenPopup(false)}
                sx={{
                  padding: "12px 24px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": { boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)" },
                }}
              >
                Close
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Popup;
