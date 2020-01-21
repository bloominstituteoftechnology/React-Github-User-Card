import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image, Button, Divider } from 'semantic-ui-react';

const UserCard = ({ user }) => {
   return (
      <div className='user-card'>
      <Card centered raised>
         <Image src={user.avatar_url} wrapped ui={false} />
         <Card.Content>
            <Card.Header><Icon name='github' />{user.name}</Card.Header>
            <Card.Meta>
               <span className='date'>{user.bio}</span>
            </Card.Meta>
            <Card.Description>
               <p>{user.location}</p>
            </Card.Description>
         </Card.Content>
         <Card.Content extra>
            <div className='ui two buttons'>
               <Link to='/followers'>
                  <Button basic color='purple'>Followers: {user.followers}</Button>
               </Link>

               <Link to='/following'>
                  <Button basic color='blue'>Following: {user.following}</Button>
               </Link>
            </div>
         </Card.Content>
      </Card>

      <Divider section/>
      </div>
   )
}

export default UserCard;

{/*      <img src={user.avatar_url} alt='Adrian Guadalupe' />
         <h2>{user.name}</h2>
         <p>{user.bio}</p>
         <p>{user.location}</p>
         <p>Followers: {user.followers}</p>
         <p>Following: {user.following}</p> */}