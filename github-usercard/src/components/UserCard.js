import React from 'react';
import FollowersCard from './FollowersCard';
import { Icon } from 'semantic-ui-react';

const UserCard = props => {
    return (
        <div>
            <div className='container'>
                <div className="user-card">
                    <div className="user-imgContainer">
                        <img key={props.user.id} src={props.user.avatar_url} alt={props.user.name} className="userImage" />
                    </div>
                    <div className='userInfo'>
                        <h3>{props.user.name}</h3>
                        <p className="user-login">{props.user.login}</p>
                        <div className="user-description">
                            <p>
                                <Icon name='map marker alternate' size='large' color='violet' />: {props.user.location}
                            </p>
                            <p>
                                <Icon name='user' size='large' color='violet' />: <a href={props.user.html_url}> {props.user.html_url}</a>
                            </p>
                            <p>
                                <Icon name='address card outline' size='large' color='violet' />: {props.user.bio}
                            </p>
                        </div>
                    </div>
                    <div className="userFooter">
                        <p>Followers: <span className="numbers">{props.user.followers}</span> </p>
                        <p>Following: <span className="numbers">{props.user.following}</span></p>
                    </div>
                </div>

            </div>
            <h2>{props.user.name}'s followers:</h2>
            <FollowersCard />
        </div>

    )
};

export default UserCard;