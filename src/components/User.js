import React from 'react';
import axios from 'axios';
import UserFollowers from './UserFollowers';
import GitHubCalendar from 'github-calendar';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink, UncontrolledCollapse
} from 'reactstrap';


class User extends React.Component {
  constructor() {
    super();
    this.state = {
      userFollowers: []
    }
  }

  componentDidMount() {
    console.log("User Component did mount.")
    axios.get(`https://api.github.com/users/${this.props.user.login}/followers`)
      .then(res => { 
        console.log("res.data from followers: ", res.data) // 200
        this.setState({
          ...this.state,
          userFollowers: res.data // object
        })
        // console.log("userFollowers: ", this.userFollowers)
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("User componentDidUpdate is running");
    // console.log("prevState.user: ", prevProps.user);
    // console.log("this.state.user: ", this.props.user);
    if (prevProps.user !== this.props.user) {
      console.log("user has changed!");

      axios.get(`https://api.github.com/users/${this.props.user.login}/followers`)
      .then(res => { 
        console.log("res.data from followers: ", res.data) // 200
        this.setState({
          ...this.state,
          userFollowers: res.data // object
        })
        // console.log("userFollowers: ", this.userFollowers)
      })
      .catch(err => console.log(err))

    }
  }


  render() {

    const { user } = this.props;

    GitHubCalendar(".calendar", "Qirhi");
  
    // or enable responsive functionality:
    GitHubCalendar(".calendar", "Qirhi", { responsive: true });
  
      // Use a proxy
      // GitHubCalendar(".calendar", "Qirhi", {
      //     proxy (username) {
      //       return fetch(`https://your-proxy.com/github?user=${username}`)
      //     }
      // }).then(r => r.text())


    return (
      <>
        {/* <CardBody>
        { user ? `User name: ${user.name}` : "We don't have a user"}
        </CardBody>
        <br/>
        <UserFollowers userFollowers={this.state.userFollowers}/> */}


              <Card>
                <CardBody>
                <h1>Github UserCard</h1>
                  <CardTitle tag="h5">{ user ? `${user.login}` : "We don't have a user"}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">{user.name}</CardSubtitle>
                </CardBody>
                <img className="user-image" width="25%" src={`${user.avatar_url}`} alt="Card image cap" />
                <CardBody>
                  <CardText>{ user.bio === null ? "no bio yet" : `${user.bio}`}</CardText>
                  <CardLink href={`${user.html_url}`}>{`${user.login}'s Github`}</CardLink>
                  <br/>
                

                  <div>
                    <Button color="info" id="toggler" style={{ marginBottom: '1rem' }}>
                      Followers
                    </Button>
                    <UncontrolledCollapse toggler="#toggler">
                      <Card>
                        <CardBody>
                        <UserFollowers userFollowers={this.state.userFollowers}/>
                        </CardBody>
                      </Card>
                    </UncontrolledCollapse>
                    
                    <div class="calendar">
                      Loading the data just for you.
                   


                    </div>
                  </div>

                </CardBody>
              </Card>





      
      </>
    )
  }
}

export default User;

