import React from "react";

import { Box, Typography, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: theme.palette.primary.main,
        width: "100%",
        height: "50px",
        display: "flex",
        alignItems: "center",
        pl: 2,
      }}
    >
      <Typography variant="h3" sx={{ color: "#fff" }}>
        Homeflow
      </Typography>
    </Box>
  );
};

export default Header;
