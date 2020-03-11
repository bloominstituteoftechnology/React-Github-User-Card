import React from 'react';

function FollowerCard(props) {
	//console.log("FollowerCard Props ~ ", props);

	return(
		<div className="Follower">
			<h3>{props.data.login}</h3>
		</div>
	)

}

export default FollowerCard;