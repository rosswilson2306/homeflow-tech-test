import React, { useContext, useEffect } from "react";

import Config from "../../config.json";
const serverUrl = Config.SERVER_URL;

import { Button, Grid, Box, Typography } from "@mui/material";
import { useSnackbar } from "notistack";

import PropertyContext from "../context/PropertiesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DetailsBreakdown from "../components/DetailsBreakdown";
import AgentCard from "../components/AgentCard";

const PropertyDetails = ({ setContentType }) => {
  const { propertyDetails, handleAddToSavedProperties, savedProperties } =
    useContext(PropertyContext);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (savedProperties.length) {
      enqueueSnackbar("Added to saved properties", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "left",
        },
      });
    }
  }, [savedProperties]);

  const handleBackToResults = () => {
    setContentType("list-view");
  };

  const handleSaveProperty = () => {
    handleAddToSavedProperties(propertyDetails.property_id);
  };

  return (
    <Box sx={{ p: 2.5 }}>
      <Button
        startIcon={<FontAwesomeIcon icon={faArrowLeft} />}
        sx={{ color: "primary.dark", mb: 2 }}
        onClick={handleBackToResults}
        variant="outlined"
      >
        Back to results
      </Button>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box sx={{ maxHeight: "300px", overflowY: "hidden" }}>
            <img
              src={`${serverUrl}${propertyDetails.photos[0]}`}
              alt="Main image"
              width="100%"
              height="auto"
            />
          </Box>
          <DetailsBreakdown
            address={propertyDetails.display_address}
            price={propertyDetails.price}
            addedOn={propertyDetails.available_on}
            onSaveProperty={handleSaveProperty}
          />
        </Grid>
        <Grid item xs={4}>
          <AgentCard
            agencyName={propertyDetails.agency.agency_name}
            agencyLogo={propertyDetails.agency.agency_logo}
            agencyAddress={propertyDetails.agency.branch.branch_name}
            contact={propertyDetails.contact_telephone}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PropertyDetails;
