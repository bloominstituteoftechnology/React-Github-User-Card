import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            //set initial default state values
            name: "Amber Pittman",
            username: "Amber-Pittman",
            location: " || 'Not Available' ",
        }

    }

    
    render() {
        return (
            <div class="card">
                <img src={image url of user} data-pin-nopin="true" />
                <div class="card-info">
                    <h3 class="name">{users name}</h3>
                    <p class="username">{users user name}</p>
                    <p>Location: {users location}</p>
                    <p>Profile:  
                    <a href={address to users github page}>{address to users github page}</a>
                    </p>
                    <p>Followers: {users followers count}</p>
                    <p>Following: {users following count}</p>
                    <p>Bio: {users bio}</p>
                </div>
            </div>
        )
    }
}


export default App;