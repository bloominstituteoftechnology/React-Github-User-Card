import React from 'react'

const GithubFollowers = (props) => {
    return(
        <div className="githubcard">
        <img src={props.item.avatar_url} alt="pfps"/> 
        <div className="githubcardinfo">
         
         <h1><i>{props.item.login}</i></h1>
         <p><i>{props.item.username}</i></p>
         
         <p>Profile : <a href={props.item.html_url}>{props.item.html_url}</a></p>

         </div>



        
     </div>
    )
}
export default GithubFollowers