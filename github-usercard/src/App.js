import React, { Component } from 'react';
import axios from 'axios';
import { Container, Grid } from '@material-ui/core';
import Card from './components/Card';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			self: 'jduncan1980',
			users: [],
			profiles: [],
		};
	}

	getUser = (user) => {
		return axios.get(
			`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${user}`
		);
	};

	getFollowers = (user) => {
		return axios.get(
			`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${user}/following`
		);
	};

	componentDidMount() {
		Promise.all([
			this.getUser(this.state.self),
			this.getFollowers(this.state.self),
		])
			.then((values) => {
				this.setState(() => {
					return { users: [values[0].data, ...values[1].data] };
				});
			})
			.then(() => {
				this.state.users.forEach((user) => {
					this.getUser(user.login).then((res) => {
						// console.log(res.data);
						this.setState(
							(state) => {
								return { profiles: [...state.profiles, res.data] };
							},
							() => console.log(this.state.profiles)
						);
					});
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<Container>
				<Grid container spacing={3} direction='row'>
					{this.state.profiles !== [] &&
						this.state.profiles.map((profile) => {
							return (
								<Grid item key={profile.login}>
									<Card user={profile} />
								</Grid>
							);
						})}
				</Grid>
			</Container>
		);
	}
}
