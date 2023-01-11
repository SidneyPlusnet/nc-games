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

export const postCommentByReviewId = (review_id, newComment, happyamy2016, votesHere) => {
const postBody = {author: happyamy2016, body: newComment, votes: votesHere, review_id: review_id}

console.log(review_id)
return gameReviewsApi.post(`/reviews/${review_id}/comments`, postBody )
}