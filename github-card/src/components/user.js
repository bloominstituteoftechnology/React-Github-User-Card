import React from 'react';

class User extends React.Component{


    render(){

    const { user } = this.props;

        return(
            <div className='usercontainer'> 
            <h3>GitHub User Card!</h3>
                <div>Name: {user.name} </div>
                <div>Login Name: {user.login}</div>
                <div>Location: {user.location} </div>
                <div>Followers: {user.followers}</div>
                <div>Following: {user.following}</div>
            
            </div>
        )
    }
}

export default User;