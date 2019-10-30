import React from "react";

const MyFollowers = (props) => {

    console.log(props)
   return(
        <>
            {props.myFans.map(fan => (
                <div className="user">
                  <img src={fan.avatar_url} key={fan.id} alt={fan.login} />
                  <p>{fan.name}</p>
                </div>
              ))
            }
        </>
    )
}

export default MyFollowers;