import React from "react";

const MyProfile = props => {

    //console.log("yo", props)
    return(
        <div className="user">
              <img src={props.myInfo.avatar_url} key={props.myInfo.id} alt={props.myInfo.login} />
              <p>{props.myInfo.name}</p>
        </div>
    )
}

export default MyProfile;