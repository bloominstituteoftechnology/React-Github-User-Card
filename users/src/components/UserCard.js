import React from 'react';
import styled from "styled-components";

const Cardstyle = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 50px; 
    border-radius: 25px 50px; 
    border: 1px solid black;
    padding-bottom: 20px;
`;
const Cardstyle2 = styled.div`
    width: 600px;
    margin: 0 auto;
    margin-top: 50px; 
    border-radius: 25px 50px; 
    border: 1px solid black;
    padding-bottom: 20px;
`;

const Image = styled.img`
    margin-top: 50px; 
    width: 200px;
    height: 200px;
`;

const UserCard = props => {
  return (
    //Card with styling
    <Cardstyle>
      <div className='card-container'>
        <Image src={props.card.avatar_url} />
        <Cardstyle2 className='user-data'>
          <h2>{props.card.name}</h2>
          <h4>{props.card.login}</h4>
          <h4>{props.card.bio}</h4>
        </Cardstyle2>
        <img src={`http://ghchart.rshah.org/${props.card.login}`} alt="Github chart" />
      </div>
    </Cardstyle>
  )
}

export default UserCard;