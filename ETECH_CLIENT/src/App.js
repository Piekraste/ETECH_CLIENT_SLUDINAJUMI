import React, { useState, useEffect } from 'react';
import { Container,  Grow, Grid } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import Filter from "./components/Filter/Filter";
import Posts from './components/Posts/Posts';
import { getPosts } from './actions/posts';
import Sensor from './Sensor';

import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const [filteredData, setFilter] = useState([]);
  
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts()); 
    
      }, [currentId, dispatch]);

  
      const [mode, setMode] = React.useState('dark');
      const colorMode = React.useMemo(
        () => ({
          toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
          },
        }),
        [],
      );

  
  const detectTime = () => {
    const currentTime = new Date().getHours();
    if (currentTime > 18) {
     }

  };


 const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
 
  return (
    <ThemeProvider theme={theme}>
      <Sensor />
     <Container maxWidth="lg">
         <Filter setFilter={setFilter}></Filter>
 
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12}>
              <Posts filteredData={filteredData} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
 
 
    </Container>
    </ThemeProvider>
  );
};


export default App;


/*
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12}>
              <Posts filteredData={filteredData} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow> */


      //const interval = setInterval(() => {
    //  console.log('This will run every second!');
      
    //}, 10000);
    //return () => clearInterval(interval);