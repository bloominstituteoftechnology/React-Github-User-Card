import React from "react";
import { Row, Col, Card, CardTitle, CardSubtitle, CardImg, Button} from "reactstrap";


function FollowerCard(props) {
	return(
		<Col md={{ size: 6, offset: 3 }}>
			<Card body className="text-center">
				<Row>
					<Col md="4">
						<CardImg src={props.follower.avatar_url} />
					</Col>
					<Col>
						<CardTitle>{props.follower.login}</CardTitle>
						<a href={props.follower.html_url}><Button>Visit Them</Button></a>
					</Col>
				</Row>
			</Card>
		</Col>
	);
}

export default FollowerCard;