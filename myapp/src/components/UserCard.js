import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function UserCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.userdata.avatar_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {console.log(props.userdata)}
            {props.userdata.login}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.userdata.created_at}
            <br/>
            {props.userdata.type}
            <br/>
            {props.userdata.updated_at}
            <br/>
            Public Repos: {props.userdata.public_repos}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary">
          Go to github
        </Button>
      </CardActions>
    </Card>
  );
}
