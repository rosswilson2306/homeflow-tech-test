import React from "react";

import { Box, CircularProgress } from "@mui/material";

const LoadingOverlay = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        pt: 5,
      }}
    >
      <CircularProgress size={70} />
    </Box>
  );
};

export default LoadingOverlay;
