import "./App.css";
import React from "react";
import axios from "axios";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			user: [],
			githubId: "",
		};
	}

	componentDidMount() {
		axios
			.get("https://api.github.com/users")
			.then((res) => {
				console.log(res);
				this.setState({
					user: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				{this.state.user.map((user) => {
					return (
						<div className="Github">
							<h2>{`Github Handle: ${user.login}`}</h2>
							<img src={user.avatar_url}></img>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
