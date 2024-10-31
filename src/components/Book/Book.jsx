import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, rating, category } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 shadow-2xl mt-8 mb-8 p-6 h-[482px] flex flex-col justify-between">
        <figure className="py-8 bg-gray-600 rounded-xl">
          <img className="w-32 h-40 mx-auto" src={image} />
        </figure>
        <div>
          <div className="flex items-center gap-2">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="btn btn-xs bg-gray-800 rounded-full text-green-400"
              >
                {tag}
              </div>
            ))}
          </div>
            <h2 className="card-title my-4">{bookName}</h2>
            <p className="border-b-2 border-dashed border-gray-500 pb-5">
              By: {author}
            </p>
          <div className="flex justify-between items-center">
            <p>{category}</p>
            <p>
              {rating} <span className="text-xl">☆</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
