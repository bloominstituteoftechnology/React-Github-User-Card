import React from "react";
import { Container, Col } from "reactstrap";
import axios from "axios";
const graphic = document.getElementsByClassName("graphic");


class ContributionGraphic extends React.Component{

	componentDidMount(){
		const proxyURL = "https://cors-anywhere.herokuapp.com/";
		const contributeURL = "https://github.com/users/Air-Bear/contributions";

		axios.get(proxyURL + contributeURL).then(response => {
		  console.log(response);
		  graphic[0].insertAdjacentHTML("afterbegin", response.data);
		});
	}
	
	render(){
		return(
			<Container>
				<Col xs="auto" className="graphic text-center"></Col>
			</Container>
			
		);
	}
	
}

export default ContributionGraphic;