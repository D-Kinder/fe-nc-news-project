import {useEffect, useState} from 'react'
import { getTopics } from '../Helpers/Api'

const FilterDropDown = ({setChosenTopic}) => {
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

export default FilterDropDown