import { useState, useEffect } from 'react'
import { Link, useParams} from 'react-router-dom';
import { fetchReviews } from '../Utils/api';

function CreateListOfReviews({individualReview, setIndividualReview}) {

    const [listOfReviews, setListOfReviews] = useState([])

    

const [isLoading, setIsLoading] = useState(true)
      const {categoryUrl} = useParams()
   

const handleReviewClick = (review) => {
    setIndividualReview(review)
  };

useEffect(()=>{

    fetchReviews(categoryUrl).then((data) => {
        setIsLoading(false)
        setListOfReviews(data.reviews)
        
    })}, [categoryUrl])

if(isLoading){
    return <div>Loading...</div>
}


    return (
        <ul className="reviewBox">{listOfReviews.map((review, i) => {
            return <li  key={i} className = "reviewOnHomepage">
                <h2>{review.title}</h2>
                <p>Owner: {review.owner}</p>
                <p>Votes: {review.votes}</p>
                <img alt = {review.title} className="imageInMainMenu" src= {review.review_img_url} />
                <Link to = {`/games/${review.review_id}`}>
                <button onClick={() => handleReviewClick(review)} className = "moreInfo">More info...</button>
                </Link>
            </li>
            
        })}</ul>

        )
}

export default CreateListOfReviews
