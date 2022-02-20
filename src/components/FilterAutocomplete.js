import React from "react";

import { Autocomplete, TextField } from "@mui/material";

const FilterAutocomplete = ({ onSetFilters }) => {
  const options = [
    { keyword: "waterside" },
    { keyword: "parking" },
    { keyword: "terrace" },
    { keyword: "garden" },
    { keyword: "flat" },
    { keyword: "house" },
  ];

  return (
    <Autocomplete
      multiple
      onChange={(e, value) => onSetFilters(e, value)}
      options={options}
      getOptionLabel={(option) => option.keyword}
      renderInput={(params) => (
        <TextField {...params} variant="standard" placeholder="Filters..." />
      )}
    />
  );
};

export default FilterAutocomplete;
