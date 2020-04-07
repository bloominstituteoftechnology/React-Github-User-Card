import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            myCard: [],
            following: [],
            followers: [],
        };
    }
    componentDidMount() {
        axios
            .get('https://api.github.com/users/Perezented')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    myCard: response.data,
                });
            });
        axios
            .get('https://api.github.com/users/Perezented/followers')
            .then((response) => {
                console.log(response.data);
                response.data.forEach((value) => {
                    const theirName = value.login;
                    axios
                        .get(`https://api.github.com/users/${theirName}`)
                        .then((response2) => {
                            console.log(response2);
                            // this.setState({
                            //     followers: response2,
                            // });
                        })
                        .catch((error) => {
                            console.log('ERRORZ MENG!', error);
                        });
                });
                // this.setState({
                //       followers: res.data,
                //   });
            });
        axios
            .get('https://api.github.com/users/Perezented/following')
            .then((res) => {
                this.setState({
                    following: res.data,
                });
            });
    }

    render() {
        return (
            <div className="App">
                <h1>Github Card Displayer</h1>
                <div>
                    <img src={this.state.myCard.avatar_url} />
                    <h2>{this.state.myCard.login} is my Github handle</h2>
                    <h3>Hey there, I'm {this.state.myCard.name}</h3>
                    <h5>{this.state.myCard.bio}</h5>
                    <h3>Location: {this.state.myCard.location}</h3>
                    <p>
                        Number of Public Repos: {this.state.myCard.public_repos}
                    </p>
                    <p>Followers: {this.state.myCard.followers}</p>
                    <p>Following: {this.state.myCard.following}</p>
                    <p>{this.state.myCard.html_url}</p>
                </div>
                <div>
                    <section>
                        <h2>Followers</h2>
                        {this.state.followers.map((follower) => (
                            <div>
                                <h2>{follower.login} is my Github handle</h2>
                                <h3>Hey there, I'm {follower.name}</h3>
                                <h5>{follower.bio}</h5>
                                <h3>Location: {follower.location}</h3>
                                <p>
                                    Number of Public Repos:{' '}
                                    {follower.public_repos}
                                </p>
                                <p>Followers: {follower.followers}</p>
                                <p>Following: {follower.following}</p>
                                <p>{follower.html_url}</p>
                            </div>
                        ))}
                    </section>
                    <section>
                        <h2>Following</h2>
                        {this.state.following.map((following) => (
                            <div>
                                <h2>{following.login} is my Github handle</h2>
                                <h3>Hey there, I'm {following.name}</h3>
                                <h5>{following.bio}</h5>
                                <h3>Location: {following.location}</h3>
                                <p>
                                    Number of Public Repos:{' '}
                                    {following.public_repos}
                                </p>
                                <p>Followers: {following.followers}</p>
                                <p>Following: {following.following}</p>
                                <p>{following.html_url}</p>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
