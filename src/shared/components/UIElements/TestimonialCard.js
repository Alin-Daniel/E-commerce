import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";

import "./TestimonialCard.scss";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    fontFamily: 'Lato'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: "1.5rem",
    fontFamily: 'inherit',
    marginBottom: "1.2rem",
    textTransform: 'uppercase'
  },
  pos: {
    marginBottom: "1.2rem"
  },
  paragraph: {
      fontSize: '1.2rem',
      fontFamily: 'inherit'
  },
  avatar: {
      marginLeft: '1rem'
  }
});

const TestimonialCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          gutterBottom
          className={classes.title}
          variant="h5"
          component="h2"
        >
          {props.title}
          {/* I love their design */}
        </Typography>

        <Typography className={classes.paragraph} variant="body2" component="p">
          {props.children}
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          temporibus omnis quas eum excepturi veniam necessitatibus laboriosam,
          consequatur in similique voluptatum nostrum optio earum cum explicabo
          sequi magni, dolores nemo! */}
        </Typography>
      </CardContent>
      <CardActions>
      {props.src && <Avatar className={classes.avatar} alt="Remy Sharp" src={props.src}/>}
      <Typography component="h5" variant="h5">
           {props.info}
      </Typography>
      </CardActions>
    </Card>
  );
};
export default TestimonialCard;
