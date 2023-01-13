import { useEffect, useState } from "react"
import { fetchCategories } from "../Utils/api"
import { Link} from 'react-router-dom';

 function ListOfCategories () {
    const [categories, setCategories] = useState([])

    useEffect(()=>{

        fetchCategories().then((data) => {
          
            setCategories(data.categories)

        })}, [])

    return (
<div>
    <h3>Categories</h3>
<ul>{categories.map((category, i)=>{
            
            return <li className="categoryList" key = {i}>
            
              <Link to={`/${category.slug}`}>{category.slug} </Link> 
            </li>
        })}
        
        </ul>

        </div>
    )

}

export default ListOfCategories