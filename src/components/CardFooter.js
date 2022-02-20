import React, { useState } from "react";

import Config from "../../config.json";

const serverUrl = Config.SERVER_URL;

import { Grid, Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHeart } from "@fortawesome/free-solid-svg-icons";

const CardFooter = ({
  agencyName,
  agencyLogo,
  agencyWebsite,
  contact,
  onSaveProperty,
}) => {
  const [saved, setSaved] = useState(false);

  return (
    <Grid container spacing={2}>
      <Grid item sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ mr: 1 }}>
          <img
            src={`${serverUrl}${agencyLogo}`}
            alt="Agency logo"
            height="40px"
            width="auto"
          />
        </Box>
        <Box>
          <Typography variant="body2">{agencyName}</Typography>
          <Typography variant="body2">{agencyWebsite}</Typography>
        </Box>
      </Grid>
      <Grid item sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon icon={faPhone} />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {contact}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: `${saved && "red"}`, cursor: "pointer" }}
            onClick={() => {
              setSaved(true);
              onSaveProperty();
            }}
          />
          <Typography variant="body2" sx={{ ml: 1 }}>
            Save
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CardFooter;
