import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
<<<<<<< HEAD
return (
    <div className='card text-center'>
    <img
=======
  return (
    <div className='card text-center'>
      <img
>>>>>>> ff05c00adb6749a8c38f91ea720c239e6ebc17b9
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
<<<<<<< HEAD
    />
    <h3>{login}</h3>

    <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
        More
        </Link>
    </div>
    </div>
);
=======
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
>>>>>>> ff05c00adb6749a8c38f91ea720c239e6ebc17b9
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;