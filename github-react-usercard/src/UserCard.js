import React from 'react';

const UserCard = (props) => {
    const {name, avatar_url, login, html_url} = props.data;
    return (
        <>
        <div className = "mainUserConatiner">
            <div className="header" >
                <h1>This is {name}'s gitHub userCard </h1>
                <img src={avatar_url} alt={name} />
            </div>
            
            <div className="userInfo">
                <p>Username: {login} </p>
                <p>Github Link: <a href={html_url} target="_blank" rel="noopener noreferrer" > {html_url} </a> </p>
            </div>
        </div>
            
            <div className="followers">
            <h2>My Followers</h2>
               <div className ="usersCardsBox">
               {props.followerData.map( follower => (
                    <div key={follower.id} className="card">
                        <div class="userPhoto">
                            <img src={follower.avatar_url} alt={follower.login} />
                        </div>
                        <div className="userInfo">
                            <p> {follower.login} </p>
                            <p>Github Link:<a href={follower.html_url} target="_blank" rel="noopener noreferrer" > {follower.html_url} </a></p>
                        </div>
                    </div>
                ))}
               </div>
            </div>

            <div className="following">
                <h2>I follow</h2>
                <div className ="usersCardsBox">
                    {props.followingData.map( following => (
                        <div key={following.id} className="card">
                            <div class="userPhoto">
                                <img src={following.avatar_url} alt={following.login} />
                            </div>
                            <div className="userInfo">
                                <p> {following.login} </p>
                            </div>
                            <p>Github Link:<a href={following.html_url} target="_blank" rel="noopener noreferrer" > {following.html_url} </a></p>
                        </div>
                    ))}
                 </div>
            </div>
            <h2>My Repos</h2>
            <div className="repos">
                {props.userRepos.map(repo => (
                     <ul key={repo.id}>
                        <li>
                            {repo.name}
                        </li>
                    </ul>
                ))}
            </div>   
       </>
    );
};

export default UserCard;