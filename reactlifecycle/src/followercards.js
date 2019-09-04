import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

function followerCards(props){
    console.log('follower props', props)

return(

<Card>
    {/* <Image src={props.followers.map(follower => 
                    <img key={follower.id} src={follower.avatar_url}></img>                
                )} wrapped ui={false} /> */}
    <Card.Content>
      {props.followers.map(follower => 
                    <h3 key={follower.id}> {follower.login} </h3>,
                 )}
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>

)
}

export default followerCards;
  