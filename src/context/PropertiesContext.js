import { createContext } from "react";

const PropertiesContext = createContext({
  properties: [],
  propertyDetails: {},
  setPropertyDetails: () => {},
  handleAddToSavedProperties: () => {},
  savedProperties: [],
  searchedProperties: [],
  filteredProperties: [],
  loadingProperties: false,
  setLoadingProperties: () => {},
});

export default PropertiesContext;
