import React from "react";
import { Row, Col, Card, CardTitle, CardSubtitle, CardImg, CardHeader, CardText} from "reactstrap";

function HeaderCard(props){
	return(
		<Col md={{ size: 6, offset: 3 }}>
			<Card body className="text-center">
				<CardHeader>{props.data.name}</CardHeader>

				<Row>
					<Col md="3">
						<CardImg src={props.data.avatar_url} />
					</Col>
					<Col>
						<CardTitle>{props.data.login}</CardTitle>
						<CardText>This is my github card project. Some stuff happened and I did not have as much time as I wanted to do it. The core concepts are there though.</CardText>
					</Col>
				</Row>
			</Card>
		</Col>
	);
}

export default HeaderCard;