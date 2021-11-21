const styles = {
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#c2c0c1",
    height: "100%",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    fontSize: "30px",
    fontWeight: "bold",
  },
  container1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: "100px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "30px",
  },
  playAgainButton: { fontSize: "26px", margin: "15px" },
  won: {
    display: "flex",
    justifyContent: "center",
    fontSize: "48px",
    color: "green",
    margin: "20px",
  },
  lost: {
    display: "flex",
    justifyContent: "center",
    fontSize: "48px",
    margin: "20px",
    color: "red",
  },
};
export default styles;
