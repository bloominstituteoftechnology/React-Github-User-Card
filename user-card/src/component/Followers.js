import React from 'react';

function Followers ({followers}){


    return(
        <div>
            {followers.map(follower =>(
                <div className="card">
                <img src={follower.avatar_url} alt='Profile'/>
                <div className="card-info">
                    <p className="followername">{follower.login}</p>
                    <p>Profile:
                        <a href={follower.html_url}>{follower.html_url}</a>
                    </p>
                    
                </div>
            </div>
            ))
            }
        </div>
    )
};

export default Followers;