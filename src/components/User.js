import React from 'react';

class User extends React.Component {
  render() {
    // const { imageUrl } = this.props;
    // // ^ equivalent to const imageUrl = this.props.imageUrl
    const { user } = this.props;

    return (
      <>
        { user ? `User name: ${user.name}` : "We don't have a user"}

      
      </>
    )
  }
}

export default User;