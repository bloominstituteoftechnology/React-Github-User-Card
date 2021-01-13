import React from 'react'
import "./App.css"

export default function MainCard(props) {
    
console.log(props)

  
    return (
        <div className="card-container">
           <div className="image-container">
                <img src={`${props.avatar_url}`} alt=""/>
            </div>
            <div className="card-content">
            <div className="card-title">
                <h3>Bio:{`${props.bio}`}</h3>
            </div>
            <div className="card-body">
                <p>Name:   {`${props.name}`} </p>
                <p>Blog:   {`${props.blog}`}</p>
                <p>Login:  {`${props.login}`}</p>
                <p>Location:{`${props.location}`}</p>
            </div> 
            </div>
            <div className="btn">
                <button>
                    <a href={`${props.html}`}>
                 View More
                    </a>

                </button>
                


            </div>
            
        </div>
    )
}
