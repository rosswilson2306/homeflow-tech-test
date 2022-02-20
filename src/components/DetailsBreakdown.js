import React, { useState } from "react";

import { Typography, Divider, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const DetailsBreakdown = ({ address, price, addedOn, onSaveProperty }) => {
  const [saved, setSaved] = useState(false);

  return (
    <Box sx={{ py: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography variant="h4">{address}</Typography>
        <FontAwesomeIcon
          icon={faHeart}
          style={{
            color: `${saved && "red"}`,
            cursor: "pointer",
            height: "30px",
            width: "auto",
          }}
          onClick={() => {
            setSaved(true);
            onSaveProperty();
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">{price}</Typography>
        <Typography variant="h5">{addedOn}</Typography>
      </Box>
    </Box>
  );
};

export default DetailsBreakdown;
