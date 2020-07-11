import React, { Component } from 'react';
import { TextField, AppBar, Toolbar, Button } from '@material-ui/core';

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
		this.props.changeUser(e);
	};

	render() {
		return (
			<React.Fragment>
				<AppBar
					position='fixed'
					color='primary'
					style={{ top: 'auto', bottom: 0 }}
				>
					<Toolbar>
						<form onSubmit={(e) => this.handleSubmit(e)}>
							<TextField
								id='user'
								name='user'
								label='username'
								value={this.state.userName}
								onChange={(e) => this.handleChange(e)}
							/>
							<Button variant='text' type='submit' color='default'>
								Change User
							</Button>
						</form>
					</Toolbar>
				</AppBar>
				<Toolbar style={{ marginTop: '2rem' }} />
			</React.Fragment>
		);
	}
}
