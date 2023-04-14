import React, { useEffect, useState } from "react";
import Loading from "../shared/Loading.js";
import useSWR from "swr";
import ProductCard from "./ProductCard.js"


const fetcher = (url) => fetch(url).then((res) => res.json());


const Resource = () => {
  const { data, error } = useSWR(
    "https://marley-server.vercel.app/product",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return <Loading/>;
  if (data)  //console.log(data)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 my-10">
      {data.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      
    </div>
  );
};

export default Resource;
