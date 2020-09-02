import React from  'react'
import GithubFollowers from "./GithubFollowers"
import GithubCalender from 'github-calendar'


 const GithubCard = (props) => {
    const url = `https://grass-graph.moshimo.works/images/${props.githubData.login}.png`
    console.log(url)

    return (
        <div className="githubcard">
           <img src={props.githubData.avatar_url} alt="pfp"/> 
           <div className="githubcardinfo">
            
            <h1>{props.githubData.name}</h1>
            <p><i>{props.githubData.username}</i></p>
            <p>Location : {props.githubData.location}</p>
            <p>Profile : <a href={props.githubData.html_url}>{props.githubData.html_url}</a></p>
            <p>Followers: {props.githubData.followers}  Following: {props.githubData.following}</p>
            <p>Bio : "{props.githubData.bio}"</p>
            <p>Contributions:</p>  <img src={url} alt="lol" />
            
                

                <div className="followerscont">
                <h2>Followers :</h2> 
                <div className="followerscard">
                {props.githubFollowers.map((item)=>(
                    <GithubFollowers
                        key={item.id}
                        item={item}
                        />
                        ))} 
                </div>
                

                </div>
            </div>
          
           


           
        </div>
    )
}

export default GithubCard 


