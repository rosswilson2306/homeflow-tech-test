import React from "react";

import { Grid, Typography } from "@mui/material";

import PropertyCard from "./PropertyCard";

const PropertiesList = ({ properties }) => {
  return (
    <Grid container spacing={2}>
      {properties.length === 0 && <Typography>No properties found!</Typography>}
      {properties.map((property) => (
        <Grid key={property.property_id} item xs={12}>
          <PropertyCard property={property} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertiesList;
