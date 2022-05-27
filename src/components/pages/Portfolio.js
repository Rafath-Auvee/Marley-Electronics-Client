import React from "react";
import Fade from "react-reveal/Fade";

import first from "../assets/9.png";
import second from "../assets/10.png";
import third from "../assets/11.png";

const Portfolio = () => {
  return (
    <div>
      <Fade left>
        <h1 className="text-3xl text-center">Portfolio</h1>
        <div class="hero min-h-screen">
          <div class="hero-content flex-col lg:flex-row">
            <img
              className="w-96 rounded-3xl"
              src="https://i.ibb.co/CM23fzs/image.png"
              alt=""
            />
            <div>
              <h1 class="text-5xl font-bold">Hello!</h1>
              <p class="py-6">
                Myself Rafath Bin Zafar Auvee. An enthusiastic, self-taught,
                motivated programmer I am pursuing my Bachelor of Science &
                Engineering (Final Year) in Computer Science and Engineering at
                Bangladesh Army University of Science and Technology.
              </p>
              <p className="text-xl">Skills:</p>
              <p>1. HTML</p>
              <p>2. CSS</p>
              <p>3. Bootstrap</p>
              <p>4. Tailwind</p>
              <p>5. Javascript</p>
              <p>6. React</p>
              <p>7. MongoDB</p>
              <p>8. NodeJS</p>
              <p>9. ExpressJS</p>
              <p>10. DaisyUI</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-6 ml-6">
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={first} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Paradis Island Electronic Shop</h2>
              <p>React, React Router, Bootstrap</p>
              <div class="card-actions">
                {/* <button class="btn btn-primary"> </button> */}
                <a
                  href="https://auvee-assignment-9.netlify.app"
                  className="btn btn-neutral"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={second} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Law By Auvee</h2>
              <p>React, React Router, Firebase Authentication, Bootstrap</p>
              <div class="card-actions">
                {/* <button class="btn btn-primary"> </button> */}
                <a
                  href="https://auvee-assignment-10.web.app"
                  className="btn btn-neutral"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={third} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Paratronics Warehouse Solution.</h2>
              <p>
                React, React Router, Firebase Authentication, MongoDB, NodeJS,
                Expressjs, Tailwindcss, Bootstrap
              </p>
              <div class="card-actions">
                {/* <button class="btn btn-primary"> </button> */}
                <a
                  href="https://paratronics-2213d.web.app"
                  className="btn btn-neutral"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Portfolio;
