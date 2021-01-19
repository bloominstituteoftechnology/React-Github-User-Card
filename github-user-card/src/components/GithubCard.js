import "./GithubCard.css"

function GithubCard(props) {
    console.log(props.user)
    return(
        <div className = 'container'>
            <div className = 'top'>
                <h1>{props.user.name}</h1>
                <img src={props.user.avatar_url} />
                <p>Followers: {props.user.followers}</p>
            </div>
            <div className = 'bottom'>
                <h3>Bio</h3>
                <p>{props.user.bio}</p>
                <p><a href={props.user.repos_url}>My Repos</a></p>
            </div>
        </div>
    )
}

export default GithubCard;