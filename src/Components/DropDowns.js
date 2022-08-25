import { useEffect, useState } from "react"
import { getTopics } from "../Helpers/Api"

export function FilterDropDown({setChosenTopic}) {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics().then(({data}) => {
            setTopics(data.topics)
        })
    }, [])

    const handleChange = (event) => {
        setChosenTopic(event.target.value)
    }

    return(
        <select onChange={handleChange}>
            <option value="Choose a Topic">Choose Topic</option>
            {topics.map((topic) => <option key={topic.slug} value={topic.slug}>{topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}</option>)}
        </select>
    )
}

export function SortByDropDown ({setChosenSortBy}) {
    const validSortBys = ["votes", "comment_count"]

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

export function OrderDropDown({setChosenOrder}) {

    const handleChange = (event) => {
        setChosenOrder(event.target.value)
    }

    return(
        <select onChange={handleChange}>
            <option value="Choose Order">Choose Order</option>
            <option value="desc">descending (default)</option>
            <option value="asc">ascending</option>
         </select>
    )
}