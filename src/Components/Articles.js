import {useState, useEffect} from 'react'
import ArticleCard from './ArticleCard'
import { getTopics, getArticles } from '../Helpers/Api'
import {useParams} from 'react-router-dom'

const Articles = () => {
const [topics, setTopics] = useState([])
const [allArticles, setAllArticles] = useState([])
const {topic_slug} = useParams()

useEffect(() => {
    getTopics().then((data) => {
        setTopics(data.data.topics)
    })
}, [])

useEffect(() => {
    getArticles(topic_slug).then((data) => {
        setAllArticles(data.data.articles)
    })
}, [topic_slug])

    return (
        <div className="articles-page">
        <h4 className="articles-title">Articles</h4>
        <div className="topic-filter">
            <p>Filtering goes here</p>
        </div>
        {/* <div className = "order-sort-reset">
            <p>Order, sort and reset go here</p>
        </div> */}
        <div className="add-article">
            <p>Add Article goes here</p>
        </div>
        <section className="articles">
            {allArticles.map(({article_id, author, body, comment_count, title, topic, votes}) => {
                return (
                    <ArticleCard
                        key={article_id}
                        author={author}
                        body={body}
                        comment_count={comment_count}
                        title={title}
                        topic={topic}
                        votes={votes}
                        article_id={article_id}
                        />
                )
            })}
        </section>
        </div>
        
    )
}

export default Articles