import React from 'react';
import './App.css';
import Header from './Components/header';
import CreateListOfReviews from './Components/list-of-reviews';
import IndividualReviewFunc from './Components/individual-review';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link} from 'react-router-dom';
import SortByComp from './Components/sort-by';
import Error from './Components/error-page';


import ListOfCategories from './Components/list-of-categories';

function App() {

  const [sortBy, setSortBy] = useState('created_at')
  const [order, setOrder] = useState('DESC')

  const [individualReview, setIndividualReview] = useState({})

  return (
    <BrowserRouter>
    <div className='app'>
      <Header />
      <Link to = "/">
      <h2 className='homeButton'>Home</h2>
      </Link>
      <ListOfCategories />
 <SortByComp  sortBy = {sortBy} setSortBy = {setSortBy} order = {order} setOrder = {setOrder}/>
 <Routes> 
  <Route path = "/" element = {<CreateListOfReviews individualReview = {individualReview} setIndividualReview = {setIndividualReview} sortBy = {sortBy} order = {order}/>}/>
  
 <Route path = "/games/:review_Id_Url" element = {<IndividualReviewFunc individualReview = {individualReview} />} /> 

 <Route path = "/categories/:categoryUrl" 
 element = {<CreateListOfReviews individualReview = {individualReview} setIndividualReview = {setIndividualReview} sortBy = {sortBy} order = {order}/>}
 

/>

<Route path="*" element={<Error/>} />
 
 </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
