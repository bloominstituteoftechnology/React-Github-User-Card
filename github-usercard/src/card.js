import React from 'react'
import "./App.css"

export default function MainCard(props) {
    // /console.log(props)

  
    return (
        <>
        <h1>GitHub User</h1>
        <div className="card-container">
           <div className="image-container">
                <img src={`${props.user.avatar_url}`} alt=""/>
            </div>
            <div className="card-content">
            <div className="card-title">
                <h3>Bio:{`${props.user.bio}`}</h3>
            </div>
            <div className="card-body">
                <p>Name:    {`${props.user.name}`} </p>
                <p>Blog:    {`${props.user.blog}`}</p>
                <p>Login:   {`${props.user.login}`}</p>
                <p>Location:   {`${props.user.location}`}</p>
            </div> 
            </div>
            <div className="btn">
                <button>
                    <a href={`${props.user.html_url}`}>
                 View More
                    </a>

                </button>
          </div>
            
        </div>

        <div>
            <h2>Followers of Dan</h2>
        </div>
        </>
    )
}
