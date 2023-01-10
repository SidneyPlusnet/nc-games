import React from 'react';
import './App.css';
import Header from './Components/header';
import CreateListOfReviews from './Components/list-of-reviews';
import IndividualReviewFunc from './Components/individual-review';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link} from 'react-router-dom';

function App() {

  const [individualReview, setIndividualReview] = useState({})


  return (
    <BrowserRouter>
    <div>
      <Header />
      <Link to = "/">
      <p >Home</p>
      </Link>
 
 <Routes> 
  <Route path = "/" element = {<CreateListOfReviews individualReview = {individualReview} setIndividualReview = {setIndividualReview}/>}/>
  
 <Route path = "/games/:review_Id_Url" element = {<IndividualReviewFunc individualReview = {individualReview} />} /> 
 </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
