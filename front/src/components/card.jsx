import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <article>
      <img src={props.image} alt={props.shorttitle} />
      <Link to={`/product/${props._id}`}>Buy {props.shorttitle}</Link>
    </article>
  );
}

export default Card;


