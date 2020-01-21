import React from 'react';
import { Image, List, Icon } from 'semantic-ui-react'

const FollowingCard = ({ following }) => {
   return (
      // <a className='list-link' href={following.html_url}>
      <List animated verticalAlign='middle'>
         <List.Item>
           <Image size='mini' avatar src={following.avatar_url} />
           <List.Content>
             <List.Header><Icon name='github' /> {following.login}</List.Header>
           </List.Content>
         </List.Item>
      </List> 
      // </a>
   )
}

export default FollowingCard;

{/* <div>
<img src={following.avatar_url} />
<h2>Login Id: {following.login}</h2>
<p>{following.html_url}</p>
</div> */}