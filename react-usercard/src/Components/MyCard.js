import React, { useEffect } from "react";

function MyCard(props) {
  const { data } = props;
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="card-container">
      <div key={data.id} className="my-card"></div>
      <img src={data.avatar_url} alt="user avatar"></img>
      <h2>Username: {data.name}</h2>
    </div>
  );
}

export default MyCard;
