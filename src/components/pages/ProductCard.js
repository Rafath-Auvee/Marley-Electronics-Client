import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { _id, name, url, price } = product;

  const navigate = useNavigate();
  const { id } = useParams();

  const goProduct = async (id) => {
    const baseURL = `/resources/${id}`;
    console.log(baseURL);
    console.log(product);
    await navigate(`/resources/${id}`, { state: product });
    console.log("Product clicked");
  };

  return (
    <div className="">
      <div className="card card-compact w-96  shadow-xl bg-neutral text-secondary ">
        <figure>
          <img className="object-fit h-48 w-96 py-6 px-2" src={url} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name.length > 20 ? (
              <div>{name.substring(0, 25)}...</div>
            ) : (
              { name }
            )}
          </h2>
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
