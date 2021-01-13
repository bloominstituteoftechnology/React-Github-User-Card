import React from "react";
class Card extends React.Component {
  state = {
    followers: [],
    followersName: "",
  };

  render() {
    console.log(this.props.user, "this one");
    console.log(this.props.followers, "here?");
    return (
      <div className="cardContainer">
        <img src={this.props.user.avatar_url} alt={this.props.user.name} />
        <h1>Name: {this.props.user.login}</h1>
        <h3>followers: {this.props.user.followers}</h3>
        <h3>Location: {this.props.user.location}</h3>
        <div className="cardBox">
          {this.props.followers.map((item) => {
            return (
              <div className="followersCard">
                <img src={item.avatar_url} alt="followersCard" />
                <p>Login: {item.login}</p>
                <p>type: {item.type}</p>
                <p>id: {item.id}</p>
              </div>
            );
            //  return (
            //   <div className="follower">
            //       <img src={item.avatar_url} alt="follower" />
            //       <p>{item.login}</p>
            //   </div>
          })}
        </div>
      </div>
    );
  }
}
export default Card;
