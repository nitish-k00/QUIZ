import { Box, Skeleton } from "@mui/material";
import React from "react";

function Loading() {
  const box = (
    <>
      <Skeleton
        variant="text"
        width="60%"
        height={40}
        sx={{ marginBottom: 3 }}
      />
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          width="100%"
          height={40}
          sx={{ marginBottom: 2 }}
        />
      ))}
    </>
  );

  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "40px",
        borderRadius: "30px",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {box}
        {box}
        {box}
      </Box>
    </div>
  );
}

export default Loading;
