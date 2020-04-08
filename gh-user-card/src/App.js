import React from 'react';
import axios from 'axios';
import MyCard from './components/MyCard';
import Followers from './components/Followers';
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
    }
    render() {
        return (
            <div>
                <h1>Github Card Displayer</h1>

                <MyCard myInfo={this.state.myCard} />
                <div>
                    <Followers />
                </div>
            </div>
        );
    }
}

export default App;
