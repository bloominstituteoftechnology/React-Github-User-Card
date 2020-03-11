import React from 'react';
import '../Styling/Info.scss';

function Info(props) {
	//console.log("MyInfo Props ~ ", props);

	return(
		<div className="Profile">
			<h2>{props.props.name}</h2>
			<h4>{props.props.location}</h4>
			<h2>{props.props.bio}</h2>
			<div><img src={props.props.avatar_url} alt="Profile Picture" /></div>
			<a href={props.props.html_url}>Github Link</a>
		</div>
	)
}

export default Info;