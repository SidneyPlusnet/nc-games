import { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';

function CreateListOfReviews({individualReview, setIndividualReview}) {

const [listOfReviews, setListOfReviews] = useState([])
const [isLoading, setIsLoading] = useState(true)

const handleReviewClick = (review) => {
    setIndividualReview(review)
  };


useEffect(()=>{

    fetch("https://sidneys-games-ii.onrender.com/api/reviews")
    .then((response) => { 
       return response.json()})
    .then((data) => {
        setIsLoading(false)
        setListOfReviews(data.reviews)
    })}, [])

if(isLoading){
    return <div>Loading...</div>
}

    return (
        <ul className="reviewBox">{listOfReviews.map((review, i) => {
            return <li  key={i} className = "reviewOnHomepage">
                <h2>{review.title}</h2>
                <p>Owner: {review.owner}</p>
                <p>Votes: {review.votes}</p>
                <img alt = {review.title} className="images" src= {review.review_img_url} />
                <Link to = {`games/${review.title}`}>
                <button onClick={() => handleReviewClick(review)}>More info...</button>
                </Link>
            </li>
            
        })}</ul>



        )

}

export default CreateListOfReviews
