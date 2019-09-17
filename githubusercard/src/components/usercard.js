import React from 'react';
import PropTypes from 'prop-types';


const UserCard = props => {
    console.log("Props", props);
    return <div>
        {props.userProp.map(user => {user.name + user.email})}
    </div>}

UserCard.propTypes = {
    name: propTypes.string,
    email: propTypes.string
}
export default userCard;