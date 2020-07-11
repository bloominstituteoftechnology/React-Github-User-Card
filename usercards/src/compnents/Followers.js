import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

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
                    <Card key={followers.id}>
                        <CardImg src={followers.avatar_url} alt='' />
                        <CardBody>
                            <CardTitle>
                                {followers.name}
                            </CardTitle>
                            <CardSubtitle>
                                {followers.login}
                            </CardSubtitle>
                            <CardText style={{ margin: '0' }}>
                                {followers.location}
                            </CardText>
                            <CardLink href={followers.html_url}>
                                Profile: {followers.html_url}
                            </CardLink>
                            <CardText>
                                Followers: {followers.followers}
                            </CardText>
                            <CardText>
                                Following: {followers.following}
                            </CardText>
                            {followers.bio === undefined ? (
                                <CardText>Bio: None</CardText>
                            ) : (
                                    <CardText>
                                        Bio: {followers.bio}
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