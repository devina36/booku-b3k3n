// import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header';
import Books from './component/books/Books';
import HomePage from './pages/HomePage';
import Book from './component/books/Book';
import Library from './pages/Library';

function App() {
  // const [data, setData] = useState([]);

  // useEffect(function () {
  //   fetch('/fee-assessment-categories')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       return Promise.all(
  //         data.map((item) => {
  //           //item.full_name returns the repositorie name
  //           return fetch(`/fee-assessment-books/?categoryId=${item.id}&size=4`)
  //             .then((response) => response.json())
  //             .then((data) => {
  //               item['data'] = data;
  //               return item;
  //             });
  //         })
  //       );
  //     })
  //     .then((data) => setData(data));
  // }, []);

  return (
    // <div className="flex">
    //   {data.map(function (item) {
    //     return (
    //       <div className="mr" key={item.id}>
    //         <h4>{item.name}</h4>
    //         {item.data.map(function (data) {
    //           return <h5 key={data.id}>{data.id}</h5>;
    //         })}
    //       </div>
    //     );
    //   })}
    // </div>
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/category/:id" component={Books} exact />
          <Route path="/category/:category_id/:id" component={Book} exact />
          <Route path="/mylibrary" component={Library} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
