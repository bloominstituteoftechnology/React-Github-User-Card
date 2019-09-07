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
        .then(res => this.setState({people: res}))
        .catch(err => console.log(err));

        fetch('https://api.github.com/users/jasheloper/followers')
        .then(res => res.json())
        .then(res => this.setState({followers: res}))
        .catch(err => console.log(err));
    }


    render() {

        return (

            <div class="container">

                <div class="name">
                    {
                    this.state.people.name
                }

                    <h1>GitHub User Card</h1>
                </div>


                <div class="intro">
                    <div class="intro-box">
                        {
                        this.state.people.bio
                    } </div>


                    <div class="intro-box">

                        <img src={
                                this.state.people.avatar_url
                            }
                            alt="Jashele Tillman - jasheloper on Github"/>

                    </div>
                </div>


                <div class="followbox">

                    <div class="followboxee">
                        <p>Followers: {
                            this.state.people.followers
                        }</p>

                    </div>

                    <div class="followboxee">
                        <p>Following {
                            this.state.people.following
                        }</p>

                    </div>


                </div>

                <div class="people">

                    {
                    this.state.followers.map(x => {
                        return (


                            <div class="person">
                                <img src={
                                    x.avatar_url
                                }/>
                                <p>{
                                    x.login
                                }</p>
                            </div>


                        )
                    })
                } </div>

            </div>


        );
    }
}


export default App;
