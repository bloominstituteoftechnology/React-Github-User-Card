import React from 'react';
import {  Icon } from 'antd';
import GitHubCalendar from 'react-github-calendar';


function UserCard(props) {
 
  
    return (
     
        <section id="userCard">
            <div>
                <img src={props.img} alt="useravatar" />
            </div>

            <div>

            <div>
                <h1>{props.login}</h1>
            </div>

            <div>
                <h3 className="following">{props.followers} Followers</h3>
            </div>

            <div>
                <h3 className="following">{props.following} Following</h3>
            </div>

            <p><Icon type="environment" /> {props.location}</p>
            <div className='container'>
                <GitHubCalendar username="JRodDvlpr"/>
                <Icon type="github" />
            </div>
            
            </div>
        </section>
    
    );
}
  
export default UserCard;