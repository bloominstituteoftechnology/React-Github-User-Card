import React from "react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Followers from "./Followers";

export default function UserDisplay (props) {
  const {userData} = props;

  return (
    <Card>
      <CardMedia
        image={userData.avatar_url}
        style={{width: "25%",
                height: "33.333vh"}}
        title={userData.name}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          Name: {userData.name}<br/>
          Username: {userData.username}<br/>
          Location: {userData.location}<br/>
          Hireable: {userData.hireable ? "Yes" : "No"}
        </Typography>
        <Followers followers={userData.followers}/>
      </CardContent>
    </Card>
  );
}
