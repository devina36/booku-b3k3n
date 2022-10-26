import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ src, author, category, categoryId, id }) {
  return (
    <div className="m-2 md:m-4 px-2">
      <div className=" relative w-28 md:w-40 lg:52 h-auto">
        <Link to={`/category/${categoryId}/${id}`}>
          <img src={src} className=" rounded-lg md:rounded-xl lg:rounded-2xl shadows object-cover mb-4" alt="cover" />
          <h3 className=" text-md font-bold truncate">{author}</h3>
        </Link>
        <p className=" text-gray-500 text-sm truncate">{category}</p>
      </div>
    </div>
  );
}
