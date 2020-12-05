import React, { Component } from 'react';
import Card from './components/Card';
import Followers from './components/Followers';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			card: '',
			followers: ''
		};
	}
	render() {
		return (
			<div>
				<h1>GitHub Card</h1>
				<Card />
				<Followers />
			</div>
		);
	}
}

export default App;
