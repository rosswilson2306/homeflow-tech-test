import React, { useEffect, useState, useContext } from "react";

import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useSnackbar } from "notistack";

import PropertiesList from "../components/PropertiesList";
import PropertiesContext from "../context/PropertiesContext";
import BasicModal from "../components/BasicModal";
import TopBar from "../components/TopBar";
import FilterAutocomplete from "../components/FilterAutocomplete";
import LoadingOverlay from "../components/LoadingOverlay";

const pages = [{ value: "saved-properties", text: "Saved properties" }];

const AllProperties = ({
  setContentType,
  setSearchedProperties,
  setFilteredProperties,
}) => {
  const {
    properties,
    savedProperties,
    searchedProperties,
    filteredProperties,
    loadingProperties,
    setLoadingProperties,
  } = useContext(PropertiesContext);

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

  // Search
  const [searched, setSearched] = useState(false);

  const handleSearchProperty = (term) => {
    setSearched(true);
    const matchedProperties = properties.filter((item) =>
      item.display_address.toLowerCase().includes(term.toLowerCase())
    );

    setSearchedProperties([...matchedProperties]);
    setLoadingProperties(false);
  };

  const handleClearSearch = () => {
    setSearched(false);
    setSearchedProperties([]);
  };

  // Filters
  const [filters, setFilters] = useState([]);
  const [applyFilters, setApplyFilters] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);

  const handleOpenFilterModal = () => {
    setApplyFilters(false);
    setOpenFilterModal(true);
  };

  const handleCloseFilterModal = () => {
    setOpenFilterModal(false);
  };

  const handleSetFilters = (e, value) => {
    setFilters(value);
  };

  const handleApplyFilters = () => {
    const filtered = [];
    properties.forEach((property) => {
      filters.forEach((filter) => {
        if (
          property.tags.some((tag) =>
            tag.toLowerCase().includes(filter.keyword.toLowerCase())
          )
        ) {
          filtered.push(property);
        }
      });
    });

    setLoadingProperties(false);
    setFilteredProperties([...filtered]);
    setApplyFilters(true);
    setOpenFilterModal(false);
  };

  const handleClearFilters = () => {
    setApplyFilters(false);
    setFilters([]);
  };

  // Menu
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const openMenu = Boolean(menuAnchorEl);

  const handleOpenMenu = (e) => {
    setMenuAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  const handleChangeView = (page) => {
    setContentType(page.value);
    handleCloseMenu();
  };

  return (
    <>
      <TopBar
        onSearch={handleSearchProperty}
        onClearSearch={handleClearSearch}
        onOpenFilters={handleOpenFilterModal}
        pageValues={pages}
        menuAnchorEl={menuAnchorEl}
        onOpenMenu={handleOpenMenu}
        onCloseMenu={handleCloseMenu}
        onSetPageView={handleChangeView}
        openMenu={openMenu}
        filters={filters}
        applyFilters={applyFilters}
        onClearFilters={handleClearFilters}
      />
      {loadingProperties ? (
        <LoadingOverlay />
      ) : (
        <Box sx={{ background: "#f4f4f4", px: 1, mt: 1 }}>
          <PropertiesList
            properties={
              searched
                ? searchedProperties
                : applyFilters
                ? filteredProperties
                : properties
            }
          />
        </Box>
      )}
      <BasicModal
        openModal={openFilterModal}
        onCloseModal={handleCloseFilterModal}
        onSubmit={handleApplyFilters}
        setLoadingProperties={setLoadingProperties}
      >
        <FilterAutocomplete onSetFilters={handleSetFilters} />
      </BasicModal>
    </>
  );
};

export default AllProperties;
