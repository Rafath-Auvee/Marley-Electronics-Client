import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Fade } from "react-reveal";
import auth from "../../firebase.init";

const MyReview = () => {
  const [reviews, setReviews] = useState([]);
  const [user] = useAuthState(auth);

  const { email } = user;
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Fade left cascade>
      <div className="w-full">
        <h1 className="text-2xl text-center mb-5">My Reviews</h1>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6">
          {reviews.map((review) => (
            <div class="card w-96 bg-base-100 shadow-2xl shadow-black mb-5 ">
              <div class="card-body">
                <h2 class="card-title">{review.name}</h2>
                <p>{review.feedback}</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">
                    Rated {review.rating} Stars
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default MyReview;
