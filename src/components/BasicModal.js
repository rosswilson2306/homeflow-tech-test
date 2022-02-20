import React from "react";

import { Modal, Paper, Box, IconButton, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

const BasicModal = ({
  openModal,
  onCloseModal,
  onSubmit,
  setLoadingProperties,
  children,
}) => {
  return (
    <Modal
      open={openModal}
      onClose={onCloseModal}
      sx={{ display: "grid", placeItems: "center" }}
    >
      <Paper sx={{ minWidth: "300px", minHeight: "250px" }}>
        <Box sx={{ display: "flex", justifyContent: "end", p: 2 }}>
          <IconButton onClick={onCloseModal}>
            <FontAwesomeIcon icon={faXmark} />
          </IconButton>
        </Box>
        <Box sx={{ background: "#f1f1f1", p: 5 }}>{children}</Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              setLoadingProperties(true);
              onSubmit();
            }}
            startIcon={<FontAwesomeIcon icon={faCheck} />}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default BasicModal;
