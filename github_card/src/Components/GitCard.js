import '../App.css';
function GitCard(props) {


  return (
    <div className="GitCard">
      <h1>{props.gitData.login}</h1>
      <h2>{props.gitData.name}</h2>
      <div><img src ={props.gitData.avatar_url} alt='avatar'></img></div>
      <h3>Number of Public Repos: {props.gitData.public_repos}</h3>
      Followers: 
      <br></br>
      
      {[...props.followers].map(a => a.login + ' ')}
      
      
      
      <br></br>
      <a href = {props.gitData.html_url}>Go to Page</a>
       
      
    </div>
  );
}

export default GitCard;
