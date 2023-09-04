import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({data}) => {
  return (
    <div className="card">
      <h1>{data.title}</h1>
      <p>{data.selftext.slice(0,300)}</p>
      <h3 className="score" ><strong>SCORE :- </strong>  {data.score}</h3>
      <h3>{data.url}</h3>
    </div>
  );
};

export default Card;
