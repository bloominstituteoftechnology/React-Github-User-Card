import React from 'react';
import axios from 'axios';
import MyCard from './components/MyCard';
import Followers from './components/Followers';
import Following from './components/Following';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            myCard: [],
            followers: [],
        };
    }
    componentDidMount() {
        axios
            .get('https://api.github.com/users/Perezented')
            .then((response) => {
                // console.log(response.data);
                this.setState({
                    myCard: response.data,
                });
                axios.get(response.data.followers_url).then((response20) => {
                    console.log(response20.data);
                    response20.data.map((value) => {
                        axios.get(value.url).then((response2) => {
                            this.setState({
                                followers: response2.data,
                            });
                        });
                    });
                });
            });
    }
    render() {
        return (
            <div className="App">
                <h1>Github Card Displayer</h1>

                <MyCard myInfo={this.state.myCard} />
                <div>
                    <Followers
                        followersInfo={this.state.followers}
                        followersTotal={this.state.myCard.followers}
                        key={this.state.followers.id}
                    />
                    {/* <Following
                        followingInfo={this.state.following}
                        followingTotal={this.state.myCard.following}
                    /> */}
                </div>
            </div>
        );
    }
}

export default App;
