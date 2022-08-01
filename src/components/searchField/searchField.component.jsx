import React from "react"


const searchField = ({placeholder, handleChange}) => {

    return  <input type="search" 
                name="searchBar" 
                placeholder= {placeholder}
                onChange = {handleChange} />
}

export default searchField;