import React from 'react';

const Card2 = (props) => {

    return(
        <div className="card">
        <img src={props.user.avatar_url} alt='person'/>
        <div className="card-info">
          <h3 className="name">{props.user.name}</h3>
          <p className="username">{props.user.login}</p>
          <p>Profile:
            <a href={props.user.html_url}>{props.user.html_url}</a>
          </p>
        </div>
      </div>
    )
}

export default Card2;