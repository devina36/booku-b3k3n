import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <section className=" bg-white shadow-sm sticky">
      <div className=" container mx-auto py-3 px-10">
        <div className="flex flex-row justify-between items-center">
          <Link to={'/'}>
            <img src="./assets/logo-bg-new.jpg" className=" w-28 h-auto" alt="brand" />
          </Link>
          <Link to={'/mylibrary'}>
            <p className=" text-2xl md:text-3xl">📚</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
