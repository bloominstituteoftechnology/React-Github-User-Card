import React from 'react';

function Card(props) {

    return (
        <div className='container'>
            <div className='card'>
                <div className='border'></div>
                <div className='avatar'>
                    <img src={props.data.avatar_url} alt="user" />
                </div>
                <hr />
                <div className='stats'>
                    <h2>{props.data.name}</h2>
                <hr class='bottom' />
                    <div className='bio'>
                        <div>Handle: <a href={props.data.html_url}>{props.data.login}</a></div>
                        <div>Location: {props.data.location}</div>
                        <div>Bio: {props.data.bio}</div>  
                    </div>
                </div>
            </div>
            <div className='card2'>
                <h3>Followers:</h3>
                {props.followers.map(follower => {
                    return (
                        <div>
                            {follower.login}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Card;