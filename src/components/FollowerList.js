import React from "react";
import FollowerCard from "./FollowerCard";

const FollowerList = props => {
  console.log(`this is props in FollowerList`, props);
  return (
  
      <FollowerCard key={Date.now()} data={props} />
    
  );
};
export default FollowerList;
