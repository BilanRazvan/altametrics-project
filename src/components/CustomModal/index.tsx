import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const CustomModal = ({
  open,
  handleClose,
  info,
}: {
  open: boolean;
  handleClose: () => void;
  info: { date: string; description: string; payee: string };
}) => {
  const { date, description, payee } = info;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="black"
          >
            {payee}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} color="black">
            {description} : {date}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
