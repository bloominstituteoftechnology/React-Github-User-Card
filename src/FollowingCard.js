import React from 'react';
import { Image, List, Icon } from 'semantic-ui-react'

const FollowingCard = ({ following }) => {
   return (
      <a href={following.html_url} className='follower-card'>
      <List animated verticalAlign='middle' size='huge'>
         <List.Item>
           <Image size='mini' avatar src={following.avatar_url} />
           <List.Content>
             <List.Header>{following.login}</List.Header>
           </List.Content>
         </List.Item>
      </List> 
      </a>
   )
}

export default FollowingCard;

{/* <div>
<img src={following.avatar_url} />
<h2>Login Id: {following.login}</h2>
<p>{following.html_url}</p>
</div> */}