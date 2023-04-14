import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../../firebase.init";

const MyReview = () => {
  const [reviews, setReviews] = useState([]);
  const [user] = useAuthState(auth);

  const { email } = user;
  useEffect(() => {
    fetch(`https://marley-server.vercel.app/reviews?email=${email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (

      <div className="w-full">
        <h1 className="text-2xl text-center mb-5">My Reviews</h1>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6">
          {reviews.map((review, index) => (
            
            <div key={index} className="card w-96 bg-base-100 shadow-2xl shadow-black mb-5 ">
              
              <div className="card-body">
                <h2 className="card-title">{review.name}</h2>
                <p>{review.feedback}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    Rated {review.rating} Stars
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default MyReview;
