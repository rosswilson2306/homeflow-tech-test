import React from "react";

import Config from "../../config.json";
const serverUrl = Config.SERVER_URL;

import { Grid, Box } from "@mui/material";

const PhotoGrid = ({ photos }) => {
  return (
    <Grid container>
      <Grid item xs={7}>
        <img
          src={`${serverUrl}${photos[0]}`}
          alt="Main property image"
          height="100%"
          width="100%"
        />
      </Grid>
      <Grid item>
        <Box sx={{ width: "auto", height: "50%" }}>
          <img
            src={`${serverUrl}${photos[1]}`}
            alt="Main property image"
            height="100%"
            width="auto"
          />
        </Box>
        <Box sx={{ width: "auto", height: "50%" }}>
          <img
            src={`${serverUrl}${photos[2]}`}
            alt="Main property image"
            height="100%"
            width="auto"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default PhotoGrid;
