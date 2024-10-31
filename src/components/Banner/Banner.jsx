import React from "react";
import bannerImg from '../../assets/banner-book.png'
const Banner = () => {
  return (
    <div className="hero bg-base-200 px-32 py-8 mt-12 rounded-xl mb-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
        />
        <div>
          <h1 className="text-5xl font-bold mb-14">Books to freshen up your bookshelf</h1>
          <button className="btn btn-primary">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
