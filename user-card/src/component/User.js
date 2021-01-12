import React from 'react';

function User({users}){
    // console.log("hello", props)


    return(
        <div>
            
                <div class="card">
                    <img src={users.avatar_url} alt='Profile'/>
                    <div class="card-info">
                        <h3 class="name">{users.name}</h3>
                        <p class="usersname">{users.login}</p>
                        <p>Location: {users.location}</p>
                        <p>Profile:
                            <a href={users.html_url}>{users.html_url}</a>
                        </p>
                        <p>Followers: {users.followers}</p>
                        <p>Following: {users.following}</p>
                        <p>Bio: {users.bio}</p>
                    </div>
              </div>
              )
        </div>
        );
}

export default User;