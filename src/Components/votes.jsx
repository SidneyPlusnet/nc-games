
import { patchReviewByReviewId } from "../Utils/api";





 function ReviewVotes({review_Id_Url, setVotesChange}){


    
function increaseVotes () {

    setVotesChange((currentVotes)=>currentVotes +1);
    patchReviewByReviewId(review_Id_Url, 1)
}

function decreaseVotes () {

    setVotesChange((currentVotes)=>currentVotes - 1);
    patchReviewByReviewId(review_Id_Url, -1)
}




return (
    <section>
        <button onClick ={increaseVotes} className = "voteButtonUp">Vote up</button>
        <button onClick ={decreaseVotes} className = "voteButtonDown">Vote down</button>
    </section>
)

}

export default ReviewVotes;