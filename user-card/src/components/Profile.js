import React from 'react';
import axios from 'axios';
import Info from './Info';
import Followers from './Followers';
import '../Styling/Profile.scss';


class Profile extends React.Component {
	constructor() {
		super();
		this.state = {
			user: {},
			followers: []
		};
	}

	componentDidMount(){
		axios.get('https://api.github.com/users/kenjigr')
		.then(res => {
			console.log("Profile", res);
			this.setState({
				user:res.data
			})
		})
		.catch(err =>{
			console.log(err);
		})//urlMain

		axios.get('https://api.github.com/users/kenjigr/followers')
		.then(res => {
			console.log("Followers", res);
			this.setState({
				followers: res.data
			})			
		})
		.catch(err =>{
			console.log(err);
		})//urlFollowers
	}


	render(){		
		return (
			<div>
				<h1>Github API</h1>
				<Info props={this.state.user}/>				
				<div className="Followers">
					<h2>Followers</h2>
					<Followers props={this.state.followers}/>
				</div>
			</div>
		);
	}
}

export default Profile;