import React from 'react';
import PropTypes from 'prop-types';


const userCard = props => {
    console.log("Props", props);
    return <div>
        {props.userProp.map(user => {user.name + user.email})}
    </div>}
export default userCard;