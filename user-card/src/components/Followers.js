import React from 'react';
import FollowerCard from './FollowerCard';
import '../Styling/Followers.scss';

function Followers(props) {
	//console.log("Followers props ~", props);

	return(

		<div className="FollowerContainer">
			{props.props.map((follower, i) => (
				<FollowerCard data={follower} key="i" />
			))}
		</div>
	)
}

export default Followers