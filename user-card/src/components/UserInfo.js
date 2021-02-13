import React from 'react';

class UserInfo extends React.Component {
  
    render() { 
        const  user  = this.props;
        return ( 
            <div>
                <p>Username: {user.login}</p>
            <p>Email: {user.email}</p>
            <p>Company: {user.company}</p>
            <p>Location: {user.location}</p>
            <p>Hirable: {user.hireable}</p>
            <p>Bio: {user.bio}</p>
            </div>
        );
    }
  }
export default UserInfo;