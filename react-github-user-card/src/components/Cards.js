import React from 'react';
import {
    Card, CardImg,CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

class Cards extends React.Component{
constructor(props){
    super()
    console.log('props in Cards=',props)
}

graphcard =()=>{
    //  maincontainer.style.maxWidth="1160";
    //  graphContainer.classList.add('calendar');
    // graphContainer.textContent =
//    new GitHubCalendar(".calendar",`${this.props.userInfo.login}`)
}
render(){
    return(
        <div>
            <Card>
            <CardBody className="userCard">
            <div>
            <CardImg className="avatar" src={this.props.userInfo.avatar_url} alt="github avatar"/>
            </div>

            <div>
            <CardTitle className="title">{this.props.userInfo.name}</CardTitle>
            <CardSubtitle>{this.props.userInfo.login}</CardSubtitle>
            <CardSubtitle>Location :{this.props.userInfo.location}</CardSubtitle>
            <CardSubtitle>Profile :{this.props.userInfo.html_url}</CardSubtitle>
            <CardSubtitle>Followers :{this.props.userInfo.followers}</CardSubtitle>
            <CardSubtitle>Following :{this.props.userInfo.following}</CardSubtitle>
            </div>
            <div>
            <CardSubtitle className="ml-4 mt-2 mb-2">Bio :{this.props.userInfo.bio}</CardSubtitle>
            </div> 
            <div >
            <Button className="more ml-2 mt-2"
            // onClick={this.graphcard}> More Info</Button>
              > More Info</Button>
            </div>
              
            </CardBody>
            </Card>
        </div>
    )
}
}

export default Cards;
