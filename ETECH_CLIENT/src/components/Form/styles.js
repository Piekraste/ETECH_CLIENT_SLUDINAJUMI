import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    background: "primary",
    color: "primary",
    marginBottom: 10,
  },
  closeIconStyles: {
    cursor: "pointer",
    position: "absolute",
    right: "2%",
    top: "5%",
    transform: "translate(-50%, -50%)",
  },
}));
