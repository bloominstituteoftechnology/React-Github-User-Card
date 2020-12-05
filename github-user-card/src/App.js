import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Followers from './components/Followers';
import axios from 'axios';

export class App extends Component {
	constructor() {
		console.log('Constructor is running');
		super();
		this.state = {
			card: {},
			followers: []
		};
	}

	//event handler
	fetchFollowers = () => {
		axios
			.get(`https://api.github.com/users/${this.state.card.login}/followers`)
			.then(res => {
				this.setState({
					...this.state,
					followers: res.data
				});
			})
			.catch(err => console.log(err));
	};

	componentDidMount() {
		console.log('DidMount is running.');
		axios
			.get('https://api.github.com/users/rmscrlos')
			.then(res => {
				this.setState({
					...this.state,
					card: res.data
				});
			})
			.catch(err => console.log(err));
	}

	componentDidUpdate(prevProps, prevState) {}

	render() {
		console.log('Render is running', this.state.followers);
		return (
			<div className="App">
				<div>
					<h1>GitHub Card</h1>
				</div>
				<Card userData={this.state.card} fetchFollowers={this.fetchFollowers} />

				<div className="follower__container">
					{this.state.followers.map(follower => (
						<Followers key={follower.id} followerData={follower} />
					))}
				</div>
			</div>
		);
	}
}

export default App;
