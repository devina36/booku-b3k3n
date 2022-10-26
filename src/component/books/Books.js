import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';
import Card from '../home/Card';

export default function Books() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(
    function () {
      fetch(`/fee-assessment-books/?categoryId=${id}&page=${id === 12 || page < 0 ? setPage(0) : page}&size=10`)
        .then((response) => response.json())
        .then((data) => setItems(data));

      fetch(`/fee-assessment-books/?categoryId=${id}`)
        .then((response) => response.json())
        .then((data) => setCount(Math.ceil(data.length / 10)));

      fetch(`/fee-assessment-categories`)
        .then((response) => response.json())
        .then((data) => {
          return data.find((item) => item.id === parseInt(id));
        })
        .then((data) => setCategory(data));
    },
    [id, page]
  );

  const handlePageChange = (selectedObject) => {
    setPage(selectedObject.selected);
  };

  return (
    <main className="my-14 md:my-20">
      <div className="container mx-auto px-10">
        <h2 className=" mb-5 font-popp font-bold text-2xl text-center">{category.name}</h2>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
          {items.map(function (item) {
            return (
              <Card
                key={item.id}
                src={item.cover_url}
                author={item.authors}
                id={item.id}
                category={category.name}
                categoryId={item.category_id}
              />
            );
          })}
        </div>
        <div className="grid place-content-center mt-10">
          <ReactPaginate
            pageCount={count}
            pageRange={2}
            marginPagesDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName={'contain'}
            previousLinkClassName={'page'}
            breakClassName={'page'}
            nextLinkClassName={'page'}
            pageClassName={'page'}
            disabledClassNae={'disabled'}
            activeClassName={'active'}
          />
        </div>
      </div>
    </main>
  );
}
