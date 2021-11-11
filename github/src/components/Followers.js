import React from "react";

function Followers(props){
    console.log("kh",props)
    return(
        <div classname="followers">
            {props.data.map(followers => (
                <div key={followers.id} className="followers-card">
                    <img src={followers.avatar_url} alt={followers.login}/>
                    <div>
                        <h3>{followers.login}</h3> 
                    </div>
                    </div>
            ))}
        </div>
    )
}
export default Followers;