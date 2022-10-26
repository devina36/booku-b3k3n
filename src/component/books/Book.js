import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { GiBookmarklet } from 'react-icons/gi';

export default function Book() {
  const { category_id, id } = useParams();
  const [data, setData] = useState([]);
  const [section, setSection] = useState([]);
  const [duration, setDuration] = useState(0);
  const [load, setLoad] = useState(false);
  const [bab, setBab] = useState(0);
  const [getData, setGetData] = useState([]);
  const [book, setBook] = useState(false);

  useEffect(
    function () {
      fetch(`/fee-assessment-books/?categoryId=${category_id}`)
        .then((response) => response.json())
        .then((data) => {
          return data.find((item) => item.id === parseInt(id));
        })
        .then((data) => {
          setData(data);
          setBab(data.sections.length);
          setDuration(data.audio_length);
          setSection(data.sections);
        });

      const get = JSON.parse(localStorage.getItem('data')) || [];
      setGetData(get);

      setLoad(true);
    },
    [category_id, id]
  );

  const handleClick = () => {
    // const datas = data.find((item) => item.id === id);
    const get = JSON.parse(localStorage.getItem('data')) || [];
    localStorage.setItem('data', JSON.stringify([...get, data]));
    setBook(true);
    alert('berhasil ditambahkan');
  };

  return (
    <>
      {load ? (
        <main className="my-14 md:my-20">
          <div className="container mx-auto px-4 md:px-10">
            <div className=" w-full flex justify-center">
              <div className="text-center w-full md:w-2/6">
                <div className="w-full flex justify-center">
                  <img src={data.cover_url} className=" w-52 md:w-60 h-auto shadows rounded-xl" alt="" />
                </div>
                <h2 className=" font-popp font-bold text-lg mt-3">{data.title}</h2>
                <p className="font-popp font-semibold text-gray-600">{data.authors}</p>
                <div className="flex justify-between px-4 lg:px-8 mt-3">
                  <button className=" text-white py-2 px-4 rounded-md bg-[#1D1B4D] flex items-center" disabled>
                    <GiBookmarklet size={25} />
                    <p className="ml-2">Baca</p>
                  </button>
                  <button
                    onClick={() => handleClick(data.id)}
                    className="text-[#1D1B4D]"
                    disabled={book === true || getData.find((item) => item.id === data.id) ? true : false}
                  >
                    {book === true || getData.find((item) => item.id === data.id) ? (
                      <FaBookmark size={25} />
                    ) : (
                      <FaRegBookmark size={25} />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="px-4 lg:px-8 mt-10">
              <div className=" border-y-2 border-gray-400 py-2 flex font-popp mb-5">
                <p className="mr-4">📝 {bab} Bab</p>
                <p>🎧 {duration} Menit</p>
              </div>
              <div className=" mb-8">
                <h3 className=" font-popp font-bold leading-8">Tentang Buku ini?</h3>
                <p>{data.description}</p>
              </div>
              <div>
                <h3 className=" font-popp font-bold leading-8">Apa Saja di dalamnya?</h3>
                {section.map(function (items, index) {
                  return (
                    <div key={items.title}>
                      <h4 className="font-popp font-bold leading-8 text-blue-900">
                        {index + 1} {items.title}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <p>load</p>
      )}
    </>
  );
}
