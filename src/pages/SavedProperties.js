import React, { useContext } from "react";

import { Typography, Box, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import PropertyContext from "../context/PropertiesContext";
import PropertiesList from "../components/PropertiesList";

const SavedProperties = ({ setContentType }) => {
  const { savedProperties } = useContext(PropertyContext);

  const handleBackToResults = () => {
    setContentType("list-view");
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
      {!savedProperties.length ? (
        <Typography>You have no saved properties</Typography>
      ) : (
        <PropertiesList properties={savedProperties} />
      )}
    </Box>
  );
};

export default SavedProperties;
