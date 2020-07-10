import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
import lambdalogo from '../compnents/lambdalogo.png';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {
            githubUser: []
        };
    }
    componentDidMount() {
        fetch('https://api.github.com/users/JenVest2020/followers')
            .then(response => response.json())
            .then(user => {
                this.setState({ githubUser: user })
                console.log('from Followers.js: CDM', user)
            })
    }
    render() {
        return (
            <div className='fHeader'>
                <h2 style={{ textAlign: 'center' }}>Followers</h2>
                {this.state.githubUser.map(followers => (
                    <Card>
                        <CardImg src={lambdalogo} alt='' />
                        <CardBody>
                            <CardTitle>
                                {this.state.githubUser.name}
                            </CardTitle>
                            <CardSubtitle>
                                {this.state.githubUser.login}
                            </CardSubtitle>
                            <CardText style={{ margin: '0' }}>
                                {this.state.githubUser.location}
                            </CardText>
                            <CardLink href={this.state.githubUser.html_url}>
                                Profile: {this.state.githubUser.html_url}
                            </CardLink>
                            <CardText>
                                Followers: {this.state.githubUser.followers}
                            </CardText>
                            <CardText>
                                Following: {this.state.githubUser.following}
                            </CardText>
                            {this.state.githubUser.bio === null ? (
                                <CardText>Bio: None</CardText>
                            ) : (
                                    <CardText>
                                        Bio: {this.state.githubUser.bio}
                                    </CardText>
                                )}
                        </CardBody>
                    </Card>
                ))}
            </div>
        );
    };
}

export default Followers;