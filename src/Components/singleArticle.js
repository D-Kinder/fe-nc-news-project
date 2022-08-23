import axios from 'axios'
import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { getArticleById } from '../Helpers/Api'

const SingleArticle = () => {
    const [singleArticle, setSingleArticle] = useState({})

    const {article_id} = useParams()

    useEffect(() => {
        getArticleById(article_id).then((data) => {
            setSingleArticle(data.data.article)
        })
    }, [])

  console.log(singleArticle)
    return (
        <div className="single-article-page">
        <Link to="/articles" className="back-to-articles">
        <button >Back to Articles</button>
        </Link>
        <div className="single-article">
        <h3>{singleArticle.title}</h3>
        <br></br>
        <p>Author: {singleArticle.author}</p>
        <br></br>
        <p>Topic: {singleArticle.topic}</p>
        <br></br>
        <p>{singleArticle.body}</p>
        </div>
        <div className="article-comments">
            <p>View Comments: {singleArticle.comment_count}</p>
        </div>
        <div className="rate-it">
            <button>Like it</button>
            <p>Votes: {singleArticle.votes}</p>
            <button>Dislike it</button>
        </div>
        </div>
    )
    
}

export default SingleArticle