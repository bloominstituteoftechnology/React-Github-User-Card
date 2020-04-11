import React from 'react';
import axios from 'axios';
import FollowerList from './FollowerList';

class Followers extends React.Component {
    constructor() {
        super();

        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        console.log("follower componentDidMount");

        axios.get(`https://api.github.com/users/PL9627/followers`)
        .then(res => res.json())
        .then(follower => {
            console.log("followers:", follower);

            this.setState({followers: follower.data});
        })
        .catch(err => console.log("follower componentDidMount err", err))
    }

    render() {
        return(
            <div>
                {this.state.followers.map(follow => {
                    return(
                        <div>
                            <FollowerList key={follow.login} follow={follow}/>
                        </div>
                )})}
            </div>
        )
    }
};

export default Followers;