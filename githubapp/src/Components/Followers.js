import React from "react";

function Followers(props){
    console.log("kh",props)
    return(
        <div>
            {props.data.map(followers => (
                <div key={followers.id} className="followers">
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