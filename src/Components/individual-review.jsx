import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchReviewById } from "../Utils/api"


function IndividualReviewFunc () {

    const [isLoading, setIsLoading] = useState(true)

    const [review, setReview] = useState("")

    const {review_Id_Url} = useParams()

    useEffect(()=>{
        fetchReviewById(review_Id_Url).then((data) => {
            setIsLoading(false)
            setReview(data.review)

        })}, [review_Id_Url])

   if(isLoading){
            return <div>Loading...</div>
        }

    return    <div className='individualGame'>
    
        
        <h2 className = "reviewTitle"> {review.title}</h2>
        <div className="reviewInfo">
            <h2>Info</h2>
                <p>Owner: {review.owner}</p>
                <p>Votes: {review.votes}</p>
                <p>Designer: {review.designer}</p>
                <p>Category: {review.category}</p>
                </div>
                <p className="reviewBody">Review: {review.review_body}</p>
                
    
                <img alt = {review.title} className="imageInIndividual" src= {review.review_img_url} />
      </div> 

}


export default IndividualReviewFunc