import { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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
            {Desc}
            {List && (
              <ul>
                {List.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleClickClose}>Close</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ButtonModal;
