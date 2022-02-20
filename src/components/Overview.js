import React from "react";

import { Grid, Typography, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShower } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";

const Overview = ({ propertyType, bathrooms, bedrooms }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography>{propertyType}</Typography>
      </Grid>
      <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon icon={faShower} />
        <Typography sx={{ ml: 1 }}>{bathrooms}</Typography>
      </Grid>
      <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon icon={faBed} />
        <Typography sx={{ ml: 1 }}>{bedrooms}</Typography>
      </Grid>
    </Grid>
  );
};

export default Overview;
