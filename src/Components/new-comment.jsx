import { postCommentByReviewId } from "../Utils/api";
import {useState } from "react"



const CommentAdder = ({setCommentsbyId, review_Id_Url}) =>{

    

    const [newComment, setNewComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        postCommentByReviewId(review_Id_Url, newComment, "happyamy2016", 0).then((newComment) =>{
            setCommentsbyId((commentsbyId)=>{
                return [newComment, ...commentsbyId]
            })
        })
    }

    return (
<form onSubmit={handleSubmit}>
    <label htmlFor="newComment">Add Comment</label>
    <textarea 
    id = "newComment"
    value = {newComment}
    onChange = {(e)=>setNewComment(e.target.value)}>

    </textarea>
    <button type="submit">Submit</button>
</form>


    )

}

export default CommentAdder