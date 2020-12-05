import React, { Component } from 'react';

export class Card extends Component {
	render() {
		return (
			<div className="card">
				<div className="user__img">
					<img width="150" src={this.props.userData.avatar_url} alt="user's avatar" />
				</div>
				<div className="user__info">
					<div className="user__info__top">
						<h3>{this.props.userData.name}</h3>
						<p>username: {this.props.userData.login}</p>
					</div>
					<div className="user__info__bottom">
						<p>{this.props.userData.bio}</p>
						<p className="followers">
							<strong>Followers: </strong>
							{this.props.userData.followers}
						</p>
						<button onClick={this.props.fetchFollowers}>Followers</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
