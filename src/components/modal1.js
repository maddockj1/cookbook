import * as React from 'react';
//import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Marg from './content/marg'

export default function Modal1() {
  //const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //top: '50%',
    //left: '50%',
    //transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const styleModal = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <div>
      <Button onClick={handleOpen}>Dry Lands Smokey Margarita</Button>
      <Modal sx={styleModal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Marg />
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  )
}
