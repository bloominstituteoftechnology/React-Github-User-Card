/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { Component } from 'react';
import { TextField, AppBar, Toolbar, Button, Grid } from '@material-ui/core';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
		};
	}

	handleChange = (e) => {
		e.persist();
		this.setState(() => {
			return { userName: e.target.value };
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.changeUser(this.state.userName);
	};

	render() {
		return (
			<React.Fragment>
				<AppBar
					position='fixed'
					color='primary'
					// style={{ top: 'auto', bottom: 0 }}
					css={css`
						top: auto;
						bottom: 0;
					`}
				>
					<Toolbar
						css={css`
							display: flex;
							align-items: center;
							justify-content: space-around;
						`}
					>
						<form
							onSubmit={(e) => this.handleSubmit(e)}
							css={css`
								padding: 0.75rem 0;
							`}
						>
							<Grid
								container
								css={css`
									@media only screen and (max-width: 500px) {
										flex-direction: column;
										align-items: center;
									}
								`}
							>
								<TextField
									id='user'
									name='user'
									label='username'
									variant='outlined'
									color='secondary'
									value={this.state.userName}
									onChange={(e) => this.handleChange(e)}
									css={css`
										margin-right: 1rem;
										@media only screen and (max-width: 500px) {
											margin-bottom: 0.75rem;
											margin-right: 0;
										}
									`}
								/>
								<Button variant='contained' type='submit' color='default'>
									Change User
								</Button>
							</Grid>
						</form>
					</Toolbar>
				</AppBar>
				<Toolbar style={{ marginTop: '2rem' }} />
			</React.Fragment>
		);
	}
}
