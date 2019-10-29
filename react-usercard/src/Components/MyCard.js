import React, { useEffect } from "react";

function MyCard(props) {
  const { data } = props;
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="card-container">
      <div key={data.id} className="my-card"></div>
      <img src={data.avatar_url}></img>
      <h2>Name: {data.name}</h2>
      <h3>Bio: {data.bio}</h3>
      <h3>Location: {data.location}</h3>
    </div>
  );
}

export default MyCard;
