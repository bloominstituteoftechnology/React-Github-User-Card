import React from 'react';
import UserCard from './UserCard'
import FollowersCard from './FollowersCard'


class UserData extends React.Component{
    constructor(){
        super();
        this.state = {
            userdata: [],
            followers: []
        }
    }
    componentDidMount(){
        Promise.all([
            fetch('https://api.github.com/users/milano12345'),
            fetch('https://api.github.com/users/gaearon/followers')
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1, data2]) => this.setState({
            userdata: data1, 
            followers: data2
        }));
    }
    
    render() {
        return (
            <div>
                <div className='wrapper1'><UserCard userdata={this.state.userdata}/></div>
                <div className='wrapper2'>{this.state.followers.map(user => <FollowersCard followers={user}/>)}</div>
            </div>
        )
    }
}

export default UserData;