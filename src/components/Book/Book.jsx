import React from "react";

const Book = ({ book }) => {
  const { image, bookName, author, tags, rating } = book;
  return (
    <div className="card bg-base-100 shadow-2xl mt-8 p-6">
      <figure className="py-8 bg-gray-600 rounded-xl">
        <img className="w-32 h-40 mx-auto" src={image} />
      </figure>
      <div className="mt-4">
        <div className="flex gap-2">
          {tags.map((tag) => (
            <div className="badge badge-outline text-green-400">{tag}</div>
          ))}
        </div>

        {/* <div className="badge badge-outline">Products</div> */}
        <h2 className="card-title my-4">{bookName}</h2>
        <p className="border-b-2 border-dashed border-gray-500 pb-5">
          By: {author}
        </p>
        <div className="flex justify-between items-center">
          <p>Fiction</p>
          <p>{rating}</p>
        </div>
        <div className="card-actions justify-between"></div>
      </div>
    </div>
  );
};

export default Book;
