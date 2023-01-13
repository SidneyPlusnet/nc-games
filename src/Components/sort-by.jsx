// import { useState } from "react"
// import { fetchReviews } from "../Utils/api"



function SortByComp ({sortBy, setSortBy, setOrder, order }){

return (

<div>

    <h4> Sort by</h4>

    <select value = {sortBy} onChange = {(e) =>setSortBy(e.target.value)}>
<option value = "votes">Votes </option>
<option value = "created_at">Created at </option>
<option value = "review_id"> review_id </option>
    </select>

    <select value = {order} onChange = {(e) =>setOrder(e.target.value)}>
<option value = "desc">Descending </option>
<option value = "asc">Ascending </option>
    </select>



</div>
)


}

export default SortByComp