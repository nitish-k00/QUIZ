import React from "react";
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

function RemaingQ({ openPopup, setOpenPopup, reaming }) {
  return (
    <div>
      <Dialog
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        sx={{
          "& .MuiPaper-root": {
            width: "90%",
            maxWidth: "600px",
            p: 3,
            textAlign: "center",
            backgroundColor: "#f5f5f5",
            borderRadius: "12px",
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold", color: "blue" }}>
          Incomplete Quiz
        </DialogTitle>
        <DialogContent>
          <Typography variant="h5" color="red" fontWeight="bold">
            {reaming} Question(s) Remaining
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            You haven't answered all the questions yet. Please complete the
            remaining questions and submit to finish the quiz.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenPopup(false)}
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Got It!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RemaingQ;
