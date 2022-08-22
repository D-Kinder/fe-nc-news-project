import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Topics = () => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        axios.get("https://dk-nc-news.herokuapp.com/api/topics").then((data) => {
            setTopics(data.data.topics)
        })
    }, [])

    return (
        <div className="topics-page">
            <h4 className="topics-title">TOPICS</h4>
            <section className="topics-list">
                <ul>
                {topics.map((topic) => {
                    return (
                        <li className="single-topic" key={topic.slug}>
                            <Link to={`/topics/${topic.slug}`}>
                        <h4>{topic.slug}</h4>
                        <br></br>
                        <p>{topic.description}</p>
                        </Link>
                        </li>
                    )
                
                })}
                </ul>
            </section>
        </div>
    )
}

export default Topics