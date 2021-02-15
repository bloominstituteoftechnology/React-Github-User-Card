import React from "react";



class Followers extends React.Component {

   

  render() { 
      const {followers} = this.props;
      console.log('this is the followers data from followers component', this.props)
    return (
      <>
       {followers.map( (follower, idx) => {
                return (
                    <p key={idx}>{followers[idx].login}</p>
                )
            })}
      </>
    )
  }
}

export default Followers;
