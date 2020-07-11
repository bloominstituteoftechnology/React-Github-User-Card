import React, { Component } from 'react';
import { TextField, AppBar, Toolbar, Button } from '@material-ui/core';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
		};
	}

	handleChange = (e) => {
		this.setState(() => {
			return { user: e.target.value };
		});
	};
	handleSubmit = () => {
		this.props.setValue(this.state.user);
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
						<form onSubmit={this.handleSubmit}>
							<TextField
								id='user'
								name='user'
								label='username'
								value={this.state.user}
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
