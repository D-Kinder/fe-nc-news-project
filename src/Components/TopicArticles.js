import { useParams, Link } from "react-router-dom"
import {useEffect, useState} from 'react'
import axios from "axios"

const TopicArticles = () => {
    const [topicArticles, setTopicArticles] = useState([])
    const {topic} = useParams()
    const titleTopic = topic.charAt(0).toUpperCase() + topic.slice(1)

    useEffect(() => {
        axios.get(`https://dk-nc-news.herokuapp.com/api/articles?topic=${topic}`).then((data) => {
            setTopicArticles(data.data.articles)
        })
    }, [])
    console.log(topicArticles)

return (
    <div className="topic-articles-page">
    <h4 className ="topic-articles-title">{`${titleTopic} Articles`}</h4>
    <div className="back-to-topics">
    <Link to="/topics">Back to Topics</Link>
    </div>
    <div className="topic-article-share">
        <p>Seen something amazing and want to spread the word?</p>
        <p>Copy this URL:</p>
        <p> {`https://dk-nc-news.herokuapp.com/api/articles?topic=${topic}`}</p>
    </div>
    <section className="topic-articles-list">
    <ul>
        {topicArticles.map((article) => {
            return (
                <li className="single-topic-article" key={article.id}>
                    <h4>{article.title}</h4>
                    <br></br>
                    <p>{article.author}</p>
                    <br></br>
                    <p>{article.body}</p>
                    <br></br>
                    <p>Comments: {article.comment_count}</p>
                </li>
            )
        })}
    </ul>
    </section>
    
    </div>
)
}

export default TopicArticles