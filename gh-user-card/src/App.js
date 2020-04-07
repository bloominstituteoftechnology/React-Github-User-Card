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
            .then((res) => {
                console.log(res.data);
                this.setState({
                    followers: res.data,
                });
            });
    }

    render() {
        return (
            <div className="App">
                <h1>Github Card Displayer</h1>
                <div>
                    <img src={this.state.myCard.avatar_url} />
                    <h2>{this.state.myCard.login}</h2>
                </div>
                <section>
                    <h3>Followers</h3>
                    {this.state.followers.map((follower) => (
                        <h4>
                            {console.log(follower)}
                            {follower.login}
                        </h4>
                    ))}
                </section>
                <section></section>
            </div>
        );
    }
}

export default App;
