import React from 'react';
import { render } from 'react-dom';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var user = this.props.user; 
        return(
            <div className="card">
                <div className="card-info">
                    <img src={user.avatar_url}></img>
                    <h3>{user.name}</h3>
                    <p>{user.login}</p>
                </div>
            </div>
        )
    }     
};
export default UserCard;

