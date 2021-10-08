import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { open } from "../../../features/handleOpen/handleOpenSlice";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import useStyles from "./styles";

import moment from "moment";
import localization from "moment/locale/lv";

import { likePost, deletePost } from "../../../actions/posts";

export default function Post({ post, setCurrentId }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleTags = (post) => {
    if (post.tags) {
      const tag = post.tags.map((tag) => `#${tag} `);
      return tag;
    } else {
      return " ";
    }
  };

  // Needs connection to redux / store to use the handleOpen/handleClose functionality of the form field
  // const open = useSelector((state) => state.handleOpen.value);
  const handleEdit = () => {
    // dispatch(open());
    return setCurrentId(post._id);
  };

  moment.updateLocale("lv", localization);

  return (
    <Card className={classes.card}>
      <CardHeader
        title={post.creator}
        subheader={moment(post.createdAt).fromNow()}
      />
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          className={classes.likeCount}
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpIcon color="primary" fontSize="medium" />
          <IconButton color="primary" aria-label="patīk">
            {post.likeCount}
          </IconButton>
        </Button>

        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" /> Dzēst
        </Button>
        <Button size="small" color="primary" onClick={handleEdit}>
          <EditIcon fontSize="small" /> Labot
        </Button>
      </CardActions>

      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />

      <CardContent>
        <Typography variant="body2" color="text.Secondary" component="p">
          <br />
          {post.message}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {handleTags(post)}{" "}
        </Typography>
      </CardActions>

      <CardContent>
        <Typography variant="body2" color="textSecondary">
          Tālrunis - {post.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
