import React, { useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDollar,
  faPhone,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Contact = () => {
  const handleClick = () => {
    toast.info("Thank you for your interest");
  };
  return (
    <div className="grid lg:grid-cols-3  p-5 m-5 shadow-md rounded-lg gap-4">
      <div className="card w-96 bg-base-100 shadow-2xl shadow-black ">
        <figure className="px-10 pt-10">
          <h1>
            <FontAwesomeIcon
              icon={faCommentDollar}
              style={{ fontSize: "150px" }}
            />
          </h1>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Pay monthly at 0% APR</h2>
          <p>
            You can pay over time when you choose to check out with
            Daisy&nbsp;Card Monthly Installments.†
          </p>
          <Link to="" className="btn" onClick={handleClick}>
            Learn more
          </Link>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-2xl shadow-black">
        <figure className="px-10 pt-10">
        <h1><FontAwesomeIcon icon={faPhone} style={{ fontSize: "150px" }} /></h1>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Get help buying</h2>
          <p >
            Have a question? Call a Specialist or chat online.
          </p>
          <p>Call 01610-772131</p>
          <Link to="" className="btn" onClick={handleClick}>
            Contact Us
          </Link>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-2xl shadow-black">
        <figure className="px-10 pt-10">
        <FontAwesomeIcon icon={faTruckFast} style={{ fontSize: "150px" }} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Fast, free delivery</h2>
          <p>
          Choose free delivery or pick up available items at an
            Daisy&nbsp;Store.
          </p>
          <Link to="" className="btn" onClick={handleClick}>
            Learn more
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Contact;
