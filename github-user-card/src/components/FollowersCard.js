import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 225,
        margin: "20px auto",
        border: "2px solid black",
        borderRadius: "20px",
        backgroundColor: "#82A4BC",
        boxShadow: "10px 10px 6px -1px rgba(219,219,219,0.72)"

    },
    cardimg: {
        margin: "0 auto",
        maxWidth: "75%",
        borderRadius: "40%",
    },
    cardText: {
        textAlign: 'center'
    }
  });

const FollowersCard = ({ name, img }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.cardimg}
            component="img"
            alt="User Pic"
            image={img}
            title="User Pic"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.cardText}>
                    {name}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default FollowersCard; 
