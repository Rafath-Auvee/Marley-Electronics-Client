import React from 'react';
import { Link } from 'react-router-dom';

const BuyNow = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img className='w-[700px] rounded-2xl opacity-80' src="https://i.ibb.co/JsKhtJv/image.png" alt='' />
          <div>
            <h1 className="text-6xl font-bold">GET THE</h1>
            <h1 className="text-3xl text-amber-500 font-bold">BEST TOOLS</h1>
            <p className="py-6">We provide 100% original products to our customers for more than 3 years</p>
            <Link to={'/product'}><button className="btn ">Shop now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default BuyNow;