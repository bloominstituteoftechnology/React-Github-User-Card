import React from 'react';
import { Image, List, Icon } from 'semantic-ui-react';

const FollowerCard = ({ follower }) => {
   return (
      <List animated verticalAlign='middle'>
         <List.Item>
           <Image size='mini' avatar src={follower.avatar_url} />
           <List.Content>
             <List.Header><Icon name='github' /> {follower.login}</List.Header>
           </List.Content>
         </List.Item>
      </List> 
   )
}

export default FollowerCard;

{/* <div>
   <img src={follower.avatar_url} />
   <h2>Login Id: {follower.login}</h2>
   <p>{follower.html_url}</p>
</div> */}