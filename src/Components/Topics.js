import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { getTopics } from '../Helpers/Api'

const Topics = () => {
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getTopics().then((data) => {
            setTopics(data.data.topics)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) return <p>Loading...</p>
    return (
        <div className="topics-page">
            <h2 className="topics-title">TOPICS</h2>
            <section className="topics-list">
                <ul>
                {topics.map((topic) => {
                    return (
                        <li className="single-topic" key={topic.slug}>
                            <Link to={`/topics/${topic.slug}`}>
                        <h4 className="topic-heading">{topic.slug}</h4>
                        <br></br>
                        <h4>{topic.description}</h4>
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