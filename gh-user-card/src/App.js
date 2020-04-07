import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            myCard: [],
        };
    }
    componentDidMount() {
        axios
            .get('https://api.github.com/users/Perezented')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    myCard: response.data.message,
                });
            });
    }

    render() {
        return (
            <div className="App">
                <h1>Github Card Displayer</h1>
                <div></div>
            </div>
        );
    }
}

export default App;
