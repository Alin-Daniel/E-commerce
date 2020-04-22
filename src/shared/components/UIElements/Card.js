import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import Favorite from "@material-ui/icons/FavoriteOutlined";

import "./Card.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: '30rem'
  },
  media: {
    height: "40rem",
    
  },
});

const ImgCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageUrl}
          title="Dummy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
            {/* Title */}
          </Typography>
          <Typography gutterBottom variant="body1" component="h2">
            {props.children}
          {/* € 100 */}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton aria-label="cart">
            <AddShoppingCart />
          </IconButton>
          <IconButton aria-label="favorite">
            <Favorite />
          </IconButton>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default ImgCard;
