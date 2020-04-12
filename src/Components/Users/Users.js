import React from "react";
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ me, users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {me.login === "pj-wise" ? <UserItem user={me} /> : ""}
        <div style={userStyle}>
          {users.map(user => {
            return <UserItem key={user.id} user={user} />;
          })}
        </div>
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat( 3, 1fr)",
  gridGap: "1rem"
};

export default Users;
