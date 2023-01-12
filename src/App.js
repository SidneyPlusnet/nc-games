import React from 'react';
import './App.css';
import Header from './Components/header';
import CreateListOfReviews from './Components/list-of-reviews';
import IndividualReviewFunc from './Components/individual-review';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link} from 'react-router-dom';


import ListOfCategories from './Components/list-of-categories';

function App() {


  const [individualReview, setIndividualReview] = useState({})
  const [listOfReviews, setListOfReviews] = useState([])
  const [categories, setCategories] = useState([])


  return (
    <BrowserRouter>
    <div className='app'>
      <Header />
      <Link to = "/">
      <h2 className='homeButton'>Home</h2>
      </Link>

      <ListOfCategories categories = {categories} setCategories = {setCategories} />
 
 <Routes> 
  <Route path = "/" element = {<CreateListOfReviews individualReview = {individualReview} setIndividualReview = {setIndividualReview} listOfReviews={listOfReviews} setListOfReviews= {setListOfReviews} categories ={categories}/>}/>
  
 <Route path = "/games/:review_Id_Url" element = {<IndividualReviewFunc individualReview = {individualReview} />} /> 

 <Route path = "/:categoryUrl" element = {<CreateListOfReviews individualReview = {individualReview} setIndividualReview = {setIndividualReview} listOfReviews={listOfReviews} setListOfReviews= {setListOfReviews} categories ={categories}/>}/>

 
 </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
