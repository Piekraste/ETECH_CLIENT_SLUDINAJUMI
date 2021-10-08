import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography } from "@mui/material";

const baseURL =
  "https://api.thingspeak.com/channels/1481991/status.json?api_key=A80QELDUFKQYY5GN";

export default function Sensor() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h6" align="center">
          {post.channel.name} {post.channel.latitude} {post.channel.longitude}
        </Typography>
      </AppBar>
    </Container>
  );
}

//export default Sensor;

/*
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, AppBar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

const gitHubUrl = "https://api.thingspeak.com/channels/1481991/status.json?api_key=A80QELDUFKQYY5GN";

const Sensor = () => {
  
  const [userData, setUserData] = useState([]);
  
  const getUser = async () => {
        const response = await axios.get(gitHubUrl);
        setUserData(response.data);
        console.log(userData);  
  }
  
  useEffect(() => {
        getUser();
   },[])   
  
   console.log(userData);

  return (
    <Container maxWidth="lg">
      <AppBar  position="static" color="inherit">
        <Typography variant="h4" align="center">yoooo</Typography>
      </AppBar>
      </Container>
    );
}
// {userData.channel.latitude} {userData.channel.longitude}
export default Sensor;

*/
