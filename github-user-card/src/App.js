import React from 'react';
import './App.css';


class App extends React.Component {
    constructor() {
        super();
        this.state = {

            people: {},
            followers: []
        };
    }


    componentDidMount() {
        console.log("hello???")
        fetch('https://api.github.com/users/jasheloper')
        .then(res => res.json())
        .then(res => this.setState({ people: res }))
        .catch(err => console.log(err));

        fetch('https://api.github.com/users/jasheloper/followers')
 
        .then(res => res.json())
        .then(res => this.setState({ followers: res }))
        .catch(err => console.log(err));
    }


    render() {

        return (

            <div class="container">

                <div class="name">
                    {this.state.people.name}
                </div>


                <h3 class="bio">

                {this.state.people.bio}
                </h3>


                <img class="jashele" src={
                    this.state.people.avatar_url
                } alt="Jashele Tillman - jasheloper on Github" />

<p>Followers:  {this.state.people.followers}</p>

<p>Following  {this.state.people.following}</p>



{this.state.followers.map(x => 
  <img src={x.avatar_url} /> )}



</div>





           
        );
    }
}











export default App;
