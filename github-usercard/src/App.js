/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Component } from 'react';
import axios from 'axios';
import {
	Container,
	Grid,
	Typography,
	ThemeProvider,
	CssBaseline,
} from '@material-ui/core';
import Card from './components/Card';
import theme from './theme';
import SearchBar from './components/SearchBar';
import { Spring, config } from 'react-spring/renderprops';

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
				<Spring
					config={{
						mass: 30,
						tension: 200,
						friction: 90,
					}}
					from={{ transform: 'translate3d(-100vh, -100vw, 0)', opacity: 0 }}
					to={{ transform: 'translate3d(0, 0, 0)', opacity: 1 }}
				>
					{(props) => (
						<Container style={props}>
							<Typography
								variant='h2'
								component='h1'
								color='primary'
								align='center'
								css={css`
									padding: 1rem 0;
								`}
							>
								Github Follower Cards
							</Typography>
							<Grid
								container
								css={css`
									flex-direction: column;
									justify-content: 'space-evenly';
								`}
							>
								{this.state.profiles !== [] &&
									this.state.profiles.map((profile) => {
										return (
											<Grid
												item
												key={profile.login}
												css={css`
													margin-bottom: 2rem;
												`}
											>
												<Card user={profile} changeUser={this.changeUser} />
											</Grid>
										);
									})}
							</Grid>
						</Container>
					)}
				</Spring>
				<SearchBar changeUser={this.changeUser} />
			</ThemeProvider>
		);
	}
}
