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

const ButtonModal = ({ data }) => {
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
      <Button variant="contained" onClick={handleClickOpen}>
        {Title}
      </Button>
      <Dialog open={openDialog} onClose={handleClickClose}>
        <DialogTitle>{Title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography sx={{ mb: 1 }}>{Desc}</Typography>
            {List && (
              <ul>
                <Stack spacing={1}>
                  {List.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </Stack>
              </ul>
            )}
          </DialogContentText>
          <DialogActions>
            <Button variant="contained" onClick={handleClickClose}>
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ButtonModal;
