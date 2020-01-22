import React, { Component } from 'react';
import Followers from './components/Followers';

class App extends Component {
	state = {
		me: {}
	};

	componentDidMount() {
		const getProfile = () => {
			fetch('https://api.github.com/users/kayladailey')
				.then((response) => response.json())
				.then((profile) => {
					console.log(profile);
					this.setState({ me: profile });
				})
				.catch((error) => console.log('error'));
		};
		getProfile();
	}

	render() {
		console.log(this.state);
		return (
			<div className="App">
				<h1>My GitHub Group</h1>

				<h2>{this.state.me.name} </h2>
				<Followers />
			</div>
		);
	}
}

export default App;
