import React from 'react'
import { Card } from 'semantic-ui-react'
import '../App.css';
const Followers = props => {

  const followers = props.followerData.map(follower => {
    return (
        <Card
        className="followerContainer"
           key={follower.id}
           image={follower.avatar_url}
           alt={follower.login}
           header={follower.login}
           meta={<a href={follower.html_url}>Profile</a>}
        />
    )
  })

  return (
    <Card>
      {followers}
    </Card>
  )
}

export default Followers;