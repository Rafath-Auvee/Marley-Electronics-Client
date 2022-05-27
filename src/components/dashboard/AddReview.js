import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Flip } from "react-reveal";
import { toast} from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("review added successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const [user, loading] = useAuthState(auth);
  console.log(user);
  return (
    <Flip top>
      <div className="w-96 mx-auto" style={{ minHeight: "100vh" }}>
        <h2 className="text-4xl text-teal-500">Submit your review: </h2>
        <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
          

          <div class="form-control w-full max-w-xs ">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              {...register("name")}
              value={user.displayName}
              placeholder="Rating"
              type="text"
              required
              class="input input-bordered w-full max-w-xs mb-2 rounded h-10 text-black"
            />
          </div>
          <div class="form-control w-full max-w-xs ">
            <label class="label">
              <span class="label-text">Rating</span>
            </label>
            <input
              {...register("rating")}
              min="0"
              max="5"
              placeholder="Rating"
              type="number"
              required
              class="input input-bordered w-full max-w-xs mb-2 rounded h-10 text-black"
            />
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Your Feedback</span>
            </label>
            <textarea
              class="textarea textarea-bordered w-full max-w-xs h-24 mb-2 rounded text-black"
              {...register("feedback")}
              placeholder="Feedback"
              required
            ></textarea>
          </div>
          <input type="submit" value="Submit" class="btn w-full max-w-xs" />
        </form>
        
      </div>
    </Flip>
  );
};

export default AddReview;
