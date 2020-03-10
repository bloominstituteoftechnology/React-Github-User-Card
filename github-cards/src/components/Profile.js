import React from 'react';
import axios from 'axios';
import MyInfo from './MyInfo';
import Followers from './Followers';
import '../style/Profile.scss';

const urlMain = "https://api.github.com/users/teaguehannam";
const urlFollowers = "https://api.github.com/users/teaguehannam/followers";

class Profile extends React.Component {
	constructor() {
		super();
		this.state = {
			user: {},
			followers: []
		};
	}

	componentDidMount(){
		axios.get(urlMain)
		.then(res => {
			//console.log("Profile API ~ ", res);
			this.setState({
				user:res.data
			})
		})
		.catch(err =>{
			console.log(err);
		})//urlMain

		axios.get(urlFollowers)
		.then(res => {
			//console.log("Followers Call ~ ", res);
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
				<MyInfo props={this.state.user}/>				
				<div className="FollowersOverflow">
					<h2>Followers</h2>
					<Followers props={this.state.followers}/>
				</div>
			</div>
		);
	}
}

export default Profile;