import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

export default function Posts({ setCurrentId, filteredData }) {
  const posts = useSelector((state) => state.posts);
  const selection = filteredData.length > 0 ? filteredData : posts;
  const classes = useStyles();

  return !selection.length ? (
    <CircularProgress />
  ) : (
    <div className={classes.grid}>
      {selection.map((post) => (
        <div key={post._id}>
          <Post post={post} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
}
