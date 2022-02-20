import React, { useState, useEffect } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSnackbar, SnackbarProvider } from "notistack";

import PropertiesContext from "./context/PropertiesContext";
import AllProperties from "./pages/AllProperties.js";
import PropertyDetails from "./pages/PropertyDetails";
import SavedProperties from "./pages/SavedProperties";
import Header from "./components/Header";

export const globalTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2d51ae",
    },
    secondary: {
      main: "#37b5e1",
    },
    error: {
      main: "#d12a47",
    },
    warning: {
      main: "#f3d834",
    },
    success: {
      main: "#66bb6a",
    },
    info: {
      main: "#9523a7",
    },
  },
  typography: {
    fontFamily: ["Montserrat, Roboto, Helvetica, Arial, sans-serif"],
    h1: {
      fontSize: "2rem",
      fontWeight: 900,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "0.8rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "0.6rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: ".8rem",
      fontWeight: 600,
    },
    body2: {
      fontSize: "0.7rem",
      fontWeight: 400,
    },
  },
});

const App = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
  const [propertyDetails, setPropertyDetails] = useState({});
  const [contentType, setContentType] = useState("list-view");
  const [savedProperties, setSavedProperties] = useState([]);
  const [searchedProperties, setSearchedProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loadingProperties, setLoadingProperties] = useState(false);

  useEffect(() => {
    setLoadingProperties(true);
    fetch("/api/properties?location=brighton")
      .then((response) => response.json())
      .then((json) => {
        setProperties(json.result.properties.elements);
        setLoadingProperties(false);
      })
      .catch((err) => {
        setError(error);
        setLoadingProperties(false);
      });
  }, []);

  const findProperty = (id) => {
    let found = false;
    let index = 0;

    while (!found) {
      if (properties[index].property_id === id) {
        found = true;
        return properties[index];
      }
      index++;
    }
  };

  const handleSetPropertyDetails = (id) => {
    const foundProperty = findProperty(id);

    if (foundProperty) {
      setPropertyDetails(foundProperty);
      setContentType("details-view");
    }
  };

  const handleAddToSavedProperties = (id) => {
    const foundProperty = findProperty(id);

    if (foundProperty) {
      const alreadySaved = savedProperties.find(
        (property) => property.property_id === id
      );
      if (!alreadySaved) {
        setSavedProperties((prevState) => [...prevState, foundProperty]);
      }
    }
  };

  return (
    <ThemeProvider theme={globalTheme}>
      <SnackbarProvider maxSnack={3}>
        <PropertiesContext.Provider
          value={{
            properties: properties,
            setPropertyDetails: handleSetPropertyDetails,
            handleAddToSavedProperties,
            propertyDetails,
            savedProperties,
            searchedProperties,
            filteredProperties,
            loadingProperties,
            setLoadingProperties,
          }}
        >
          <Header />
          {contentType === "list-view" && (
            <AllProperties
              setContentType={setContentType}
              setSearchedProperties={setSearchedProperties}
              setFilteredProperties={setFilteredProperties}
            />
          )}
          {contentType === "saved-properties" && (
            <SavedProperties setContentType={setContentType} />
          )}
          {contentType === "details-view" && (
            <PropertyDetails setContentType={setContentType} />
          )}
        </PropertiesContext.Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
