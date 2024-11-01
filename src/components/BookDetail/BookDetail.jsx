import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);

  const {
    bookId: currentBookId,
    image,
    bookName,
    review,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleMarkAsRead = (id) =>{
    addToStoredReadList(id)
  }

  return (
    <div className="hero bg-base-200 mt-8 rounded-xl mb-8">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="ml-4">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p>By: {author}</p>
          <div className="divider"></div>
          <p>{category}</p>
          <div className="divider"></div>
          <p className="py-6">
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <div className="flex items-center gap-2">
            <span className="font-bold">Tags: </span>
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="btn btn-xs bg-gray-800 rounded-full text-green-400"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="divider"></div>
          <div className="w-1/2 space-y-2 mb-4">
            <div className="flex justify-between items-center">
              <p>Number of pages:</p>
              <p className="font-bold">{totalPages}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Publisher:</p>
              <p className="font-bold">{publisher}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Year of Publishing:</p>
              <p className="font-bold">{yearOfPublishing}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Rating:</p>
              <p className="font-bold">{rating}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline">Read</button>
            <button className="btn btn-primary">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
