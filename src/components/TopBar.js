import React, { useState, useContext } from "react";

import {
  Box,
  Button,
  TextField,
  IconButton,
  useTheme,
  Menu,
  MenuItem,
  Chip,
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import PropertyContext from "../context/PropertiesContext";

const TopBar = ({
  onSearch,
  onClearSearch,
  onOpenFilters,
  onOpenMenu,
  onCloseMenu,
  onSetPageView,
  pageValues,
  openMenu,
  menuAnchorEl,
  filters,
  applyFilters,
  onClearFilters,
}) => {
  const { setLoadingProperties } = useContext(PropertyContext);
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);

    setTimeout(() => {
      onSearch(e.target.value);
    }, 1000);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          p: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          placeholder="Search a property..."
          value={searchTerm ? searchTerm : ""}
          sx={{ mr: 1 }}
          onChange={(e) => {
            setLoadingProperties(true);
            handleInputChange(e);
          }}
        />
        <Button
          startIcon={<FontAwesomeIcon icon={faXmark} />}
          variant="outlined"
          sx={{ mr: 2 }}
          onClick={() => {
            onClearSearch();
            setSearchTerm("");
          }}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          onClick={onOpenFilters}
          startIcon={<FontAwesomeIcon icon={faFilter} />}
          sx={{ mr: 2 }}
        >
          Filters
        </Button>
        <IconButton
          sx={{
            background: theme.palette.primary.main,
            borderRadius: "5px",
            "&:hover": { background: "#ccc" },
          }}
          onClick={onOpenMenu}
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </IconButton>
      </Box>
      {applyFilters && (
        <Box
          sx={{
            background: theme.palette.primary.light,
            display: "flex",
            alignItems: "center",
            p: 2,
          }}
        >
          {filters.map((filter, index) => (
            <Chip
              key={index}
              label={filter.keyword}
              sx={{
                background: theme.palette.warning.main,
                mr: 1,
              }}
            />
          ))}
          <Button
            variant="white"
            onClick={onClearFilters}
            sx={{
              ml: 4,
              background: theme.palette.warning.light,
              "&:hover": { background: theme.palette.warning.dark },
            }}
          >
            Clear filters
          </Button>
        </Box>
      )}
      <Menu open={openMenu} onClose={onCloseMenu} anchorEl={menuAnchorEl}>
        {pageValues.map((page, index) => (
          <MenuItem
            key={index}
            value={page.value}
            onClick={(e) => onSetPageView(page)}
          >
            {page.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default TopBar;
