  
import React from 'react';
import { Card } from 'semantic-ui-react'

const UserCard = props => {

  const data = props.user

  const extra = (
    <div>
        <a href={props.user.email} />
        <a href={props.user.blog} />
        <a href={props.user.html_url} />
    </div>
  )

  return (
    <Card className='userCard'
      header={data.login}
      image={data.avatar_url}
      meta={data.name}
      extra={extra}
    />

  )
}

export default UserCard;