import { useState, useEffect } from 'react'


function CreateListOfReviews() {

const [listOfReviews, setListOfReviews] = useState([])


useEffect(()=>{

    fetch("https://sidneys-games-ii.onrender.com/api/reviews")
    .then((response) => { 
       return response.json()})
    .then((data) => {
        console.log(data, "data")
        console.log(data.reviews, "data.reviews")
        console.log(data.reviews[0], "data.reviews[0]")
        setListOfReviews(data.reviews)
    })}, [])

    return (
        <ul class="flex">{listOfReviews.map((review, i) => {
            return <li  key={i} className = "reviewOnHomepage">
                <h2>{review.title}</h2>
                <p>Owner: {review.owner}</p>
                <p>Votes: {review.votes}</p>
                <img alt = "" className="images" src= {review.review_img_url} />
            </li>
            
        })}</ul>



        )

}

export default CreateListOfReviews
