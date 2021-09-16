
import React from 'react';
import { ThemeProvider } from '@material-ui/core/';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment';

import localization from 'moment/locale/lv';

import { useDispatch } from 'react-redux';

import { likePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
 
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
 
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  moment.updateLocale('lv', localization);
  return (


<Card className={classes.card}>
      <CardHeader title={post.creator} subheader={moment(post.createdAt).fromNow()}
      action={
        <IconButton aria-label="patīk"  onClick={() => dispatch(likePost(post._id))}>
          {post.likeCount} <FavoriteIcon fontSize="small" /> 
        </IconButton>
        
      }
      >
      
        </CardHeader>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
     
      <CardContent>
        <Typography variant="body2" color="text.Secondary" component="p"><br/>{post.message}</Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
       <Typography variant="body2" color="textSecondary" component="h2"># {post.tags.map((tag) => `${tag} `)} </Typography>
       </CardActions>
       <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2" color="textSecondary">Tālrunis - {post.title}</Typography>
          </CardContent>
      </Collapse>     
    
    </Card>
  );
  };

export default Post;

// <div className={classes.overlay2}>
//<Button style={{ color: 'black' }} size="small" onClick={() => setCurrentId(post._id)}>Labot</Button>
//</div>