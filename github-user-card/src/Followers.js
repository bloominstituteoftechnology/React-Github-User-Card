import React, { Component } from 'react';
import './App.css';

export default class Followers extends Component {
 

	render() {
		return (
			<div className="followers">
				<h1>
                {this.props.login}
                </h1>
                {/* <br />
                <h2>
                <p>{this.props.url}</p>
                <br />
                {this.props.followers}
                </h2> */}
			</div>
		);
	}
}
