
import { Link} from 'react-router-dom';

function IndividualReviewFunc ({individualReview}) {


    return    <div>
        <h2>{individualReview.title}</h2>
                <p>Owner: {individualReview.owner}</p>
                <p>Votes: {individualReview.votes}</p>
                <img alt = {individualReview.title} className="images" src= {individualReview.review_img_url} />
      </div> 

}


export default IndividualReviewFunc