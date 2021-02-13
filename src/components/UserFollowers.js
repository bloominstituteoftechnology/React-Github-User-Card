import React from 'react';


class UserFollowers extends React.Component {


  render() {
    // const { imageUrl } = this.props;
    // // ^ equivalent to const imageUrl = this.props.imageUrl
    const { userFollowers } = this.props;
    // console.log("userFollowers from UF comp: ", userFollowers)

    return (
      <>

        {
          userFollowers.map(follower => {
            // console.log("follower: ", follower.login)
            return (
              // <button>hi</button>
              <p>{follower.login}</p>
              // <p>hi{`Follower Name: ${follower.login}`}</p>
            )
          })
        }
      
      </>
    )
  }
}

export default UserFollowers;
