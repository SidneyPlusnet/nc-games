

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

