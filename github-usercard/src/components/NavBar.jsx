import React, { useState } from "react";

const NavBar = ({ changeUser }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = () => {
    changeUser(searchTerm);
  };
  return (
    <div className="navbar">
      <h1>GitHub</h1>
      <div className="searchbar">
      <label htmlFor="name">Search:</label>
      <input
        id="name"
        type="text"
        name="user"
        placeholder="Github User"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default NavBar;
