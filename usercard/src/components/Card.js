import React from 'react';

 import {
  Card as ShardsCard,
  CardTitle,
  CardImg,
  CardBody,
  CardLink
} from "shards-react";

 const Card = props => {
  return (
    <>
      <ShardsCard style={{ width: "350px" }} className="cardObj">
        <CardImg top src={props.img} alt="avatar"/>
        <CardBody>
          <CardTitle>{props.username}</CardTitle>
          <CardLink href={props.repos}>Profile</CardLink>
          <CardImg className="chart" bottom src={`http://ghchart.rshah.org/${props.username}`} alt='Github chart' />
        </CardBody>
      </ShardsCard>
    </>
  )
}

 export default Card; 