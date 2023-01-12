import axios from 'axios';




 
export const gameReviewsApi = axios.create({
    baseURL: 'https://sidneys-games-ii.onrender.com/api',
  });

export const fetchReviews = () => {

  return fetch("https://sidneys-games-ii.onrender.com/api/reviews")
    .then((response) => { 
       return response.json()})

}


export const fetchReviewById = (review_id) => {

    return fetch(`https://sidneys-games-ii.onrender.com/api/reviews/${review_id}`)
      .then((response) => { 
         return response.json()})
  
  }

  export const fetchCommentsById = (review_id) => {

    return fetch(`https://sidneys-games-ii.onrender.com/api/reviews/${review_id}/comments`)
      .then((response) => { 
         return response.json()})
  
  }

export const patchReviewByReviewId =
(review_id, increment, setErr) =>{

return gameReviewsApi.patch(`/reviews/${review_id}`, {inc_votes: increment}).then((response) => {

}).catch((err)=>{
    setErr('404 - Nothing to see here')
})
}

export const fetchUsers = () =>{

    return fetch('https://sidneys-games-ii.onrender.com/api/users')
      .then((response) => { 
   
         return response.json()})
  
  }


export const postCommentByReviewId = (review_id, newComment, happyamy2016, setErr) => {
const postBody = { body: newComment, username: happyamy2016}

console.log(postBody, "postBody")
return gameReviewsApi.post(`/reviews/${review_id}/comments`, postBody ).then(({data})=>{

  return data.comment
}).catch((err)=>{
  console.log({err}, "err")
  setErr({err})
})
}