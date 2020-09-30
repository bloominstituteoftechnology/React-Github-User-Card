import React from 'react';
import PropTypes from 'prop-types';

function User(props) {

  console.log("User: Component is rendering.");
  
  return (
    <>
      {props.user.map(user => (
        <div key={user.id} className="user">
          <img src={user.img} alt={user.name} />
          <div>
            <h3>{user.name}</h3>
            {user.next_evolution &&
              user.next_evolution.map(e => <p key={e.num}>{e.name}</p>)}
          </div>
        </div>
      ))}
    </>
  );
}

User.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.arrayOf(
        PropTypes.oneOf([
          'Grass',
          'Poison',
          'Fire',
          'Flying',
          'Water',
          'Bug',
          'Normal',
          'Electric',
          'Psychic',
          'Ground',
          'Fighting',
          'Rock',
          'Ice',
          'Ghost',
          'Dragon'
        ])
      ),
      next_evolution: PropTypes.arrayOf(
        PropTypes.shape({
          num: PropTypes.string,
          name: PropTypes.string
        })
      )
    })
  )
};

User.defaultProps = {
  user: []
};

export default User;