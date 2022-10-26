import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../../component/home/Card';

export default function New() {
  const [data, setData] = useState([]);
  useEffect(function () {
    fetch('/fee-assessment-categories')
      .then((response) => response.json())
      .then((data) => {
        return Promise.all(
          data.map((item, index) => {
            return fetch(`/fee-assessment-books/?categoryId=${item.id}&page=${index === 2 ? 0 : index + 5}&size=2`)
              .then((response) => response.json())
              .then((data) => {
                item['filter'] = data;
                return item;
              });
          })
        );
      })
      .then((data) => setData(data));
  }, []);

  const settings = {
    className: 'slider variable-width',
    ddots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className="mt-20 mb-10 md:mb-16 bg-gradient-to-b from-yells">
      <div className="container mx-auto">
        <div className="px-10">
          <h2 className="font-popp font-bold text-lg md:text-xl pt-5">Baru Dirilis Minggu Ini</h2>
          <Slider {...settings}>
            {data.map((items) => {
              return (
                <div key={items.id} className="font-popp focus:outline-none">
                  <div className="flex">
                    {items.filter.map((i) => {
                      return (
                        <div key={i.id}>
                          <Card
                            src={i.cover_url}
                            author={i.authors}
                            category={items.name}
                            categoryId={i.category_id}
                            id={i.id}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
