import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import axios from 'axios'

class UserCard extends Component {
	constructor(){
		super()
		this.state ={
			detail: []
		}
	}


	render(){

		return(
			<Card>
				<img src={this.props.detail.avatar_url} />
				<Card.Content>
					<Card.Header> {this.props.detail.login} </Card.Header>
					<Card.Meta> Followers: {this.props.detail.followers} </Card.Meta>
				</Card.Content>
			</Card>
			)
	}
}

export default UserCard;