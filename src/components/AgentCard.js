import React, { useState } from "react";

import Config from "../../config.json";

const serverUrl = Config.SERVER_URL;

import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
// import DateTimePicker from "@mui/lab/DateTimePicker";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";

const AgentCard = ({ agencyName, agencyLogo, agencyAddress, contact }) => {
  const [appointment, setAppointment] = useState(new Date());

  const handleBookAppointment = (e) => {
    setAppointment(e.target.value);
  };

  console.log("appointment", appointment);

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography>{agencyName}</Typography>
            <Typography>{agencyAddress}</Typography>
          </Box>
          <Box>
            <img
              src={`${serverUrl}${agencyLogo}`}
              alt="Agency logo"
              height="40px"
              width="auto"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mt: 1.5,
          }}
        >
          <Typography>{contact}</Typography>
          {/* <Typography>Book an appointment</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(params) => <TextField {...params} />}
              value={appointment ? appointment : new Date()}
              onChange={handleBookAppointment}
            />
          </LocalizationProvider> */}
        </Box>
      </CardContent>
    </Card>
  );
};

export default AgentCard;
