import { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";

const ButtonDialog = ({ data }) => {
  const { Title, Desc, List } = data;
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickClose = () => {
    setOpenDialog(false);
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <Button
        data-testid="titleButton"
        variant="contained"
        onClick={handleClickOpen}
      >
        {Title}
      </Button>
      <Dialog open={openDialog} onClose={handleClickClose}>
        <DialogTitle>{Title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography data-testid="dialogDescription" sx={{ mb: 1 }}>
              {Desc}
            </Typography>
            <ul>
              {List && (
                <Stack spacing={1} data-testid="listContainer">
                  {List.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </Stack>
              )}
            </ul>
          </DialogContentText>
          <DialogActions>
            <Button
              data-testid="closeButton"
              variant="contained"
              onClick={handleClickClose}
            >
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ButtonDialog;
