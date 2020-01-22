import React, { Component } from 'react';

class Followers extends Component {
	constructor() {
		super();
		this.state = {
			followers: []
		};
	}



componentDidMount() {
    const getFollowers = () => {
        fetch('https://api.github.com/users/kayladailey/followers')
            .then((response) => response.json())
            .then((followers) => {
                console.log(followers);
                this.setState({ ...this.state, followers});
            })
            .catch((error) => console.log('error'));
    };
    getFollowers();
}

render() {
    return (
        <div className="App">
     <h2> Welcome Friends! </h2>
      {this.state.followers.map(follower => (
      <div key={follower.id}>{follower.login}</div>
      ))}
        </div>
    );
}
}

export default Followers;