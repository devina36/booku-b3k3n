import React, { useEffect, useState } from 'react';
import Card from '../component/home/Card';

export default function Library() {
  const [getData, setGetData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(function () {
    const get = JSON.parse(localStorage.getItem('data')) || '';
    setGetData(get);
  }, []);

  function search(data) {
    return data.filter(
      (item) => item.title.toLowerCase().includes(query) || item.authors[0].toLowerCase().includes(query)
    );
  }
  return (
    <>
      <main className="mb-20 mt-16">
        <div className="container mx-auto">
          <div className="w-full flex justify-center">
            <input
              type="text"
              placeholder="search..."
              className=" w-4/6 md:w-2/6 h-8 border-[3px] rounded-md px-2 py-1 border-black text-black font-popp mb-5"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <h2 className="mb-5 font-popp font-bold text-2xl text-center">My Library</h2>
          {getData === '' ? (
            <h3 className="font-popp font-bold text-gray-500 text-lg text-center">Library anda masih kosong</h3>
          ) : (
            <div className="grid  gap-3 md:gap-5 grid-cols-2  md:grid-cols-3 lg:grid-cols-5 place-items-center">
              {search(getData).map(function (item) {
                return (
                  <Card
                    key={item.id}
                    src={item.cover_url}
                    author={item.authors}
                    id={item.id}
                    categoryId={item.category_id}
                  />
                );
              })}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
