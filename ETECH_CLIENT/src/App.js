import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Container, Grow, Grid } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import useStyles from "./styles";

import { getPosts } from "./actions/posts";

import Navigation from "./components/Navigation/Navigation";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import Sensor from "./components/Sensor/Sensor";

export default function App() {
  const [currentId, setCurrentId] = useState(0);
  const [filteredData, setFilter] = useState([]);

  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Sensor />

      <Container maxWidth="lg">
        <Navigation
          setFilter={setFilter}
          setCurrentId={setCurrentId}
          currentId={currentId}
        />

        <Posts filteredData={filteredData} setCurrentId={setCurrentId} />
      </Container>
    </ThemeProvider>
  );
}
