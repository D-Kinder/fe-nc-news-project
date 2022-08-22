import axios from 'axios'
import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

const SingleArticle = () => {
    const [singleArticle, setSingleArticle] = useState({})

    const {article_id} = useParams()

    useEffect(() => {
        axios.get(`https://dk-nc-news.herokuapp.com/api/articles/${article_id}`).then((data) => {
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
        <p>{singleArticle.title}</p>
        <br></br>
        <p>{singleArticle.author}</p>
        <br></br>
        <p>{singleArticle.topic}</p>
        <br></br>
        <p>{singleArticle.body}</p>
        <br></br>
        <p>Comments: {singleArticle.comment_count}</p>
        </div>
        </div>
    )
    
}

export default SingleArticle