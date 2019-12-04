import React from 'react';


function UserCard(props){



    return(

        <div key ={props.id} className="userClass" >
            <h2>{props.login}</h2>

            <p><a href={props.html_url}>Link</a></p>
            
            <img  src={props.avatar_url}/>
        </div>
    )
}
export default UserCard