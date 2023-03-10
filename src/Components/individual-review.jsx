import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchReviewById, fetchCommentsById } from "../Utils/api"
import ReviewVotes from "./votes"
import CommentAdder from "./new-comment"


function IndividualReviewFunc () {

  

    const [isLoading, setIsLoading] = useState(true)

    const [review, setReview] = useState("")

    const {review_Id_Url} = useParams()

    const [commentsbyId, setCommentsbyId] = useState("")

    const [votesChange, setVotesChange] = useState(0)

    const [err, setErr] = useState(null)

    useEffect(()=>{
        fetchCommentsById(review_Id_Url).then((data) => {
            setIsLoading(false)
            setCommentsbyId(data.comments)


        })}, [review_Id_Url])

    useEffect(()=>{
        fetchReviewById(review_Id_Url).then((data) => {
            setIsLoading(false)
            setReview(data.review)



        })}, [review_Id_Url])

   if(isLoading){
            return <div>Loading...</div>
        }

        if(err){
            return (
                <main>
                    <p>{err}</p>
                </main>
            )
        }

    return    <div className='individualGame'>
    
        
        <h2 className = "reviewTitle"> {review.title}</h2>
        <div className="reviewInfo">
            <h2>Info</h2>
            <p>Votes: {review.votes + votesChange}</p>
            <ReviewVotes review_Id_Url={review_Id_Url} votesChange={votesChange} setVotesChange = {setVotesChange} setErr = {setErr} />
                <p>Owner: {review.owner}</p>
                <p>Designer: {review.designer}</p>
                <p>Category: {review.category}</p>
                </div>
                <p className="reviewBody">Review: {review.review_body}</p>
                <img alt = {review.title} className="imageInIndividual" src= {review.review_img_url} />

                <CommentAdder setCommentsbyId = {setCommentsbyId} review_Id_Url = {review_Id_Url}/>

            {commentsbyId.length!==0 ? <div className= "comments"> <h2>Comments:</h2>
                
                <ul >{commentsbyId.map((comment, i) => {
                return <li  key={i} className ="comment" >
                    <p className="author">Author: {comment.author}</p>
                    <p>{comment.body}</p>
                    <p className="votes">Votes: {comment.votes} </p>
                    <p className="created_at">Posted...{comment.created_at}</p>
                  
                </li>
                
            })}</ul> </div>: null}   
               
     
 
      </div> 
      

}


export default IndividualReviewFunc