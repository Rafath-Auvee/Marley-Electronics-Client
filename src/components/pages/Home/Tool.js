import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ product }) => {
  const { _id, name, price, url } = product;
  return (
    <div className="card bg-neutral shadow-xl">
      <figure className="px-10 pt-10">
        <img src={url} alt="Shoes" className="object-cover h-48 w-96 rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <Link to={`/product/${_id}`}>
          <button className="btn text-neutral bg-base-100 hover:text-base-100">Order</button>
        </Link>
      </div>
    </div>
  );
};

export default Tool;
