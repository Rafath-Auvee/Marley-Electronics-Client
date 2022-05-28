import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { _id, name, url, price } = product;
  //console.log(product);
  const navigate = useNavigate();
  const { id } = useParams();

  const goProduct = async (id) => {
    const baseURL = `/product/${id}`;
    //console.log(baseURL);
    //console.log(product);
    await navigate(`/product/${id}`, { state: product });
    //console.log("Product clicked");
  };

  return (
    <div className="">
      <div className="card card-compact  shadow-xl bg-neutral text-secondary ">
        <figure>
          <img
            className="object-fit h-48 w-96 py-6 px-2"
            src={url}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}$</p>
          <div className="card-actions justify-end">
            <button onClick={() => goProduct(_id)} className="btn btn-accent">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
