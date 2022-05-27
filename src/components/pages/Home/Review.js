import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import useReviews from "../../hooks/useReviews";

const Reviews = () => {
  const [reviews, setReviews] = useReviews([]);
  return (
    <Fade left cascade>
      <div className="w-full mx-5">
        <h1 className="text-4xl mb-5 text-center">Testimonials</h1>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {reviews.map((review) => (
            <div class="card w-96 bg-base-100 shadow-2xl shadow-black mb-5 ">
            <div class="card-body">
              <h2 class="card-title">{review.name}</h2>
              <p>{review.feedback}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Rated {review.rating} Stars</button> 
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Reviews;
