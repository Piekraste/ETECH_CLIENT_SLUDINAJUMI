import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "60%", //slud bildes augstums, bija 55
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },

  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "2px", //šeit bija vairāk
    borderWidth: "10px",
    borderColor: "white",
    height: "100%",
    padding: "5px 0",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "10px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "10px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "start",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    gap: "16px",
    display: "flex",
    justifyContent: "space-between",
  },
  likeCount: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
