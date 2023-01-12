import { postCommentByReviewId, fetchUsers } from "../Utils/api";
import {useState, useEffect } from "react"



const CommentAdder = ({setCommentsbyId, review_Id_Url}) =>{

    const [isLoading, setIsLoading] = useState(true)
const [user, setUser] = useState("")
    const [newComment, setNewComment] = useState('')
    const [listOfUsers, setListOfUsers] = useState('')


   const handleUserClick = (review, err) =>{
    
    setUser(review)
   }


    useEffect(()=>{

        fetchUsers().then((data) => {
            setIsLoading(false)
     
            setListOfUsers(data.users)
        })}, [])

     const   handleClearUsername =() =>{
        setUser("")

     }

     const isValidUser = listOfUsers.includes(user)



    const handleSubmit = (e) => {
        e.preventDefault();



        postCommentByReviewId(review_Id_Url, newComment, user.username).then((newComment) =>{

            
            console.log(user.username, "user")

            if(newComment.body.length === 0){
                alert("Please include comment")
       
            }else if(user.username === undefined){

                alert("Please include username")
            }
      else
            {


           


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
   {isValidUser === true && <label htmlFor="newComment">Add Comment</label>}

   {isValidUser === true &&
    <textarea 
    id = "newComment"
    value = {newComment}
    onChange = {(e)=>setNewComment(e.target.value)}>

    </textarea>}

    <div>
    <label htmlFor="user">Choose a user</label>
    <p>Current User: {user.username}</p>
    <ul>{listOfUsers.map((user, i)=>{
            
        return <li key = {i}>
        
            <button type="button" onClick = {() => handleUserClick(user)} >{user.username}</button>
        </li>
    })}
    
    </ul>
    {isValidUser === true &&
    <button type="submit">Submit</button>}
</div>

    <button type="button" onClick = {()=> handleClearUsername() } >Clear Username </button>
</form>


    )

}

export default CommentAdder