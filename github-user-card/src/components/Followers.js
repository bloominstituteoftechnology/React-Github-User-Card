import React, { Component } from 'react';

export class Followers extends Component {
	render() {
		return (
			<div className="card follower">
				<div className="user__img">
					<img width="50" src={this.props.followerData.avatar_url} alt="user's avatar" />
				</div>
				<div className="user__info">
					<div className="user__info__top">
						<h3>Username</h3>
						<p>{this.props.followerData.login}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Followers;
