import { useState, useEffect } from "react"
import { getAllCategories } from "../services/category"
import "./css/category.css"

function Category() {

    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        getAllCategories({ setCategoryList })
    }, [])

    return (
        <a href="#" className="carousel">
            {categoryList.map(categoryItem => (
                <div className="contentContainer" key={categoryItem.id} >
                    <div className="images">
                        <img className="image" src={categoryItem.image} alt="image" />
                        <p className="date"> {categoryItem.name} </p>
                    </div>
                </div>))}
        </a>

    )

}

export default Category;