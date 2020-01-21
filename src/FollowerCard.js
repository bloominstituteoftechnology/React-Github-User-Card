import React from 'react';
import { Image, List, Icon } from 'semantic-ui-react';

const FollowerCard = ({ follower }) => {
   return (
      <a href={follower.html_url} className='follower-card'>
      <List animated verticalAlign='middle' size='huge'>
         <List.Item>
           <Image avatar src={follower.avatar_url} />
           <List.Content>
             <List.Header>{follower.login}</List.Header>
           </List.Content>
         </List.Item>
      </List> 
      </a>
   )
}

export default FollowerCard;

{/* <div>
   <img src={follower.avatar_url} />
   <h2>Login Id: {follower.login}</h2>
   <p>{follower.html_url}</p>
</div> */}