import React from 'react';
import { render } from 'react-dom';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }
     createUserCard() {
        var user = this.props.user; 
        const card = document.createElement('div');
        const newImg = document.createElement('img');
        const newCard = document.createElement('div');
        const name = document.createElement('h3');
        const userName = document.createElement('p');
        const location = document.createElement('p');
        const profile = document.createElement('p');
        const profileAddress = document.createElement('a');
        const followers = document.createElement('p');
        const following = document.createElement('p');
        const bio = document.createElement('p');
    
        name.textContent = user.name;
        userName.textContent = user.login;
        location.textContent = `Location: ${user.location}`;
        profile.textContent = 'Profile: ';
        followers.textContent = `Followers: ${user.followers}`;
        following.textContent = `Following: ${user.following}`;
        bio.textContent = `Bio: ${user.bio}`;
        newImg.src = user.avatar_url;
    
        card.classList.add('card');
        newCard.classList.add('card-info')
        name.classList.add('name');
        userName.classList.add('username');
        
        card.appendChild(newImg)
        card.appendChild(newCard)
        newCard.appendChild(name)
        newCard.appendChild(userName)
        newCard.appendChild(location)
        newCard.appendChild(profile)
        profile.appendChild(profileAddress)
        newCard.appendChild(followers)
        newCard.appendChild(following)
        newCard.appendChild(bio)
    
        return card
    }
    render() {
        var user = this.props.user; 
        return(
            <div className="card">
                <div className="card-info">
                    <img src={user.avatar_url}></img>
                    <h3>{user.name}</h3>
                    <p>{user.login}</p>
                </div>
            </div>
        )
    }     
};
export default UserCard;

