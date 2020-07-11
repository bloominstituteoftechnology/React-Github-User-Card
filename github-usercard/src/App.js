import React, { Component } from 'react';
import axios from 'axios';
import { Container, Grid, ThemeProvider, CssBaseline } from '@material-ui/core';
import Card from './components/Card';
import theme from './theme';
import background from './image/githublogo.png';
import SearchBar from './components/SearchBar';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			user: 'jduncan1980',
			users: [],
			profiles: [],
		};
	}
	changeUser = (e) => {
		this.setState({ user: e.target.value, users: [], profiles: [] });
	};

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

	getAllUsers = () => {
		Promise.all([
			this.getUser(this.state.user),
			this.getFollowers(this.state.user),
		])
			.then((values) => {
				this.setState(() => {
					return { users: [values[0].data, ...values[1].data] };
				});
			})
			.then(() => {
				this.state.users.forEach((user) => {
					this.getUser(user.login).then((res) => {
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
	};

	componentDidMount() {
		this.getAllUsers();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.user !== prevState.user) {
			console.log('new user');
			this.getAllUsers();
		}
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				{/* <CssBaseline /> */}

				<Container>
					<Grid
						container
						// spacing={3}
						justify='space-evenly'
					>
						{this.state.profiles !== [] &&
							this.state.profiles.map((profile) => {
								return (
									<Grid item key={profile.login} style={{ margin: '1.5rem' }}>
										<Card user={profile} />
									</Grid>
								);
							})}
					</Grid>
					<SearchBar changeUser={this.changeUser} />
				</Container>
			</ThemeProvider>
		);
	}
}
