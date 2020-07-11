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
			self: 'jduncan1980',
			users: [],
			profiles: [],
		};
	}
	changeUser = (e) => {
		this.setState({ self: e.target.value });
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

	// componentDidUpdate() {
	// 	this.getAllUsers()
	// }

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
					<SearchBar setValue={this.changeUser} />
				</Container>
			</ThemeProvider>
		);
	}
}
