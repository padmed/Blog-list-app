import { useSelector } from "react-redux";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import { forwardRef } from "react";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={12} ref={ref} variant="filled" {...props} />;
});

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  if (notification.status === null) return null;

  const type = notification.status ? "success" : "error";

  return (
    <Snackbar open={notification.status || notification.status === false}>
      <Alert severity={type} sx={{ width: "100%" }}>
        {notification.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
