import React, { useContext } from "react";

import Config from "../../config.json";

const serverUrl = Config.SERVER_URL;

import PhotoGrid from "./PhotoGrid";
import Overview from "./Overview";
import CardFooter from "./CardFooter";
import PropertyContext from "../context/PropertiesContext";

import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  Box,
  useTheme,
} from "@mui/material";

const PropertyCard = ({ property }) => {
  const theme = useTheme();
  const { setPropertyDetails, handleAddToSavedProperties } =
    useContext(PropertyContext);

  const handleOpenDetails = () => {
    setPropertyDetails(property.property_id);
  };

  const handleSaveProperty = () => {
    handleAddToSavedProperties(property.property_id);
  };

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid
            item
            xs={7}
            sx={{ cursor: "pointer" }}
            onClick={handleOpenDetails}
          >
            {property.photos.length > 1 ? (
              <PhotoGrid photos={property.photos} />
            ) : (
              <img
                src={`${serverUrl}${property.photos[0]}`}
                alt="Main property image"
                height="auto"
                width="100%"
              />
            )}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Typography variant="h4">{property.price}</Typography>
            </Box>
          </Grid>
          <Grid item xs>
            <Typography
              variant="h4"
              sx={{ mb: 1, cursor: "pointer" }}
              onClick={handleOpenDetails}
            >
              {property.display_address}
            </Typography>
            <Overview
              propertyType={property.property_type}
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
            />
            <Box sx={{ my: 2, maxHeight: "100px", overflowY: "hidden" }}>
              <Typography>{property.short_description}</Typography>
            </Box>
            <CardFooter
              agencyName={property.agency.agency_name}
              agencyLogo={property.agency.agency_logo}
              agencyWebsite={property.agency.external_domain}
              contact={property.contact_telephone}
              onSaveProperty={handleSaveProperty}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
