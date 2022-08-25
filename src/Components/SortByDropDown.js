import {useState} from 'react'

const SortByDropDown = ({setChosenSortBy}) => {
    const validSortBys = ["title", "topic", "author", "body", "votes", "article_id"]

    const handleChange = (event) => {
        setChosenSortBy(event.target.value)
    }

    return(
        <select onChange={handleChange}>
            <option value="Choose SortBy">Choose Sort By</option>
            <option value="created_at" key="created_at">Date created (default)</option>
            {validSortBys.map((sortBy) => <option key={sortBy} value={sortBy}>{sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}</option>)}
        </select>
    )
}

export default SortByDropDown