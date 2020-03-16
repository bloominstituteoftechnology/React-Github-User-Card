import React from 'react'

const UserCard = ({userData}) => {
    console.log(userData.name)
    return(
        <>
            <div className='card'>
                <img src={userData.avatar_url}/>
                <div className='info'>
                    <h3 className='name'>
                        {userData.name}
                    </h3>
                    <p><a href={userData.html_url}>Link</a></p>
                    <p>Followers: {userData.followers}</p>
                    <p>Following: {userData.following}</p>
                    <p>Location: {userData.location}</p>
                    <p>Bio: {userData.bio}</p>
                </div>
            </div>
        </>
    )
}

export default UserCard