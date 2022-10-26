import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import CategoryTag from '../component/home/CategoryTag';
import New from '../component/home/New';
import Populer from '../component/home/Populer';
import Recomendation from '../component/home/Recomendation';

export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(function () {
    fetch('/fee-assessment-categories')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <main className=" my-14 md:my-20">
        <div className="container mx-auto px-4 md:px-10">
          <div className=" flex justify-center">
            <div className=" w-full md:w-4/5 lg:w-3/5 text-center">
              <h1 className="font-popp text-4xl lg:text-5xl font-bold leading-relaxed">BooKu B3k3n</h1>
              <h3 className="font-popp text-xl font-bold leading-relaxed text-gray-500">Eksplore Kategori</h3>
              {data.map(function (item) {
                return (
                  <Link key={item.id} to={`/category/${item.id}`}>
                    <CategoryTag text={item.name} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <New />
        <Populer />
        <Recomendation />
      </main>
      <Footer />
    </>
  );
}
