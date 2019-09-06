import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    minWidth: 276,
    marginBottom: '32px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function UserCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardHeader
            title={props.user.login}
            subheader={`${props.user.followers} followers`}
        />
        <CardMedia
            className={classes.media}
            image={props.user.avatar_url}
            title={props.user.login}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.user.bio}
            </Typography>
        </CardContent>
    </Card>
  );
}