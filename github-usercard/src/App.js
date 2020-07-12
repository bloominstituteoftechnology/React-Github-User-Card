/** @jsx jsx */
import { css, jsx } from '@emotion/core';
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
	changeUser = (newUser) => {
		this.setState({ user: newUser, users: [], profiles: [] });
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
			console.log('new user', this.state.user);
			this.getAllUsers();
		}
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<div
					css={css`
						min-height: 100vh;
						background-image: ${background};
					`}
				>
					<Container>
						<Grid
							container
							// direction='column'
							// justify='space-evenly'
							css={css`
								flex-direction: column;
								justify-content: 'space-evenly';
								margin-left: -16px;
							`}
						>
							{this.state.profiles !== [] &&
								this.state.profiles.map((profile) => {
									return (
										<Grid item key={profile.login} style={{ margin: '1.5rem' }}>
											<Card user={profile} changeUser={this.changeUser} />
										</Grid>
									);
								})}
						</Grid>
						<SearchBar changeUser={this.changeUser} />
					</Container>
				</div>
			</ThemeProvider>
		);
	}
}
