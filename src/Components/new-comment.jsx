import { postCommentByReviewId, fetchUsers } from "../Utils/api";
import {useState, useEffect } from "react"



const CommentAdder = ({setCommentsbyId, review_Id_Url}) =>{

    const [isLoading, setIsLoading] = useState(true)
const [user, setUser] = useState('')
    const [newComment, setNewComment] = useState('')
    const [listOfUsers, setListOfUsers] = useState('')

   const handleUserClick = (review) =>{
    
    setUser(review)
   }


    useEffect(()=>{

        fetchUsers().then((data) => {
            setIsLoading(false)
     
            setListOfUsers(data.users)
        })}, [])



    const handleSubmit = (e) => {
        e.preventDefault();



        postCommentByReviewId(review_Id_Url, newComment, user.username).then((newComment) =>{

            if(newComment.body.length === 0){
                alert("Please include comment")
            }else{


           


            setCommentsbyId((commentsbyId)=>{
                return [newComment, ...commentsbyId]
               
            })

            alert("Comment added!");
        }
        })
        setNewComment('')
    }

    if(isLoading){
        return <div>Loading...</div>
    }

    return (
<form onSubmit={handleSubmit}>
    <label htmlFor="newComment">Add Comment</label>
    <textarea 
    id = "newComment"
    value = {newComment}
    onChange = {(e)=>setNewComment(e.target.value)}>

    </textarea>
    <label htmlFor="user">Choose a user</label>
    <p>Current User: {user.username}</p>
    <ul>{listOfUsers.map((user, i)=>{
            
        return <li key = {i}>
        
            <button type="button" onClick = {() => handleUserClick(user)} >{user.username}</button>
        </li>
    })}</ul>
    <button type="submit">Submit</button>
</form>


    )

}

export default CommentAdder