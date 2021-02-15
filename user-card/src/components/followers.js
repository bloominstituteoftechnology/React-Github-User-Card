import React from "react";

class Followers extends React.Component {
  render() {
    const { followers } = this.props;
    console.log(
      "this is the followers data from followers component",
      followers
    );
    return (
      <>
        {followers.map((follower, idx) => {
          return (
          
              <div key={idx} className="card2 d-flex justify-content-center flex-column">
                <img src={followers[idx].avatar_url} alt={followers[idx.login]} key={idx} style={{maxWidth: '80%', alignSelf: 'center'}} /> 
                <a href={followers[idx].html_url}><h4>{followers[idx].login}</h4></a>
                <p></p>
              </div>
          );
        })}
      </>
    );
  }
}

export default Followers;
