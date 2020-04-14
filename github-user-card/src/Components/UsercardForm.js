import React from 'react'

import './UsercardForm.styles.css'

function UsercardForm(props) {
    // console.log('User Card Form', props)
    return (
        <div className='card-container'>
            <div className='user-card-form'>
                <img className='user-image' src={props.user.avatar_url} alt='This is the user' ></img>
                <div className='user-info'>
                    <h2 className='name'>Name: {props.user.name}</h2>
                    <h4 className='login-name'>Username: {props.user.login}</h4>
                    <p className='location'>Location: {props.user.location}</p>
                    <p className='public-repos'>Public Repos: {props.user.public_repos}</p>
                    <p className='followers'>Followers: {props.user.followers}</p>
                </div>
            </div>
            <p className='bio'>Bio: {props.user.bio}</p>
            <a className='user-url' href={props.user.html_url}>Github Link</a>
        </div>
    )
}

export default UsercardForm;