import React from 'react';
import '../style/MyInfo.scss';

function MyInfo(props) {
	//console.log("MyInfo Props ~ ", props);

	return(
		<div className="MyProfile">
			<h2>{props.props.name}</h2>
			<h4>{props.props.location}</h4>
			<div><img src={props.props.avatar_url} alt="Thats Teague" /></div>
			<a href={props.props.html_url}>Github Link</a>
		</div>
	)
}

export default MyInfo;