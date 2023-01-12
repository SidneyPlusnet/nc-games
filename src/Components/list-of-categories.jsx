import { useState, useEffect } from "react"
import { fetchCategories } from "../Utils/api"
import { Link} from 'react-router-dom';

 function ListOfCategories ({categories, setCategories}) {


    useEffect(()=>{

        fetchCategories().then((data) => {
          
            setCategories(data.categories)

        })}, [categories])

    return (
<div>
<ul>{categories.map((category, i)=>{
            
            return <li key = {i}>
            
              <Link to={`/${category.slug}`}>{category.slug} </Link> {category.slug}
            </li>
        })}
        
        </ul>
        <p>Hi</p>

        </div>
    )

}

export default ListOfCategories