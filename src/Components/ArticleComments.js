import {useParams, Link} from 'react-router-dom'
import { getCommentsByArticleId, getArticleById } from '../Helpers/Api'
import { useEffect, useState } from 'react'

const ArticleComments = (state) => {
    const [articleComments, setArticleComments] = useState([])
    const [article, setArticle] = useState({})
    const {article_id} = useParams()
    
    useEffect(() => {
        getCommentsByArticleId(article_id).then(({data}) => {
            setArticleComments(data.comments)
        })
    }, [article_id])

    useEffect(() => {
        getArticleById(article_id).then(({data}) => {
            setArticle(data.article)
        })
    }, [article_id])
    
return (
    <div className="article-comments-page">
        <div className="back-to-article">
            <Link to={`/articles/${article_id}`}>Back to Article</Link>
        </div>
        <div className="article-title">
        <h4 >{article.title}</h4>
        <p>{article.author}</p>
        </div>
        <section className="single-article-comments">
            {articleComments.map(({author, body, votes}) => {
                return(
                    <div className="article-comment">
                    <p>{body}</p>
                    <br></br>
                    <p>Author: {author} - Votes: {votes}</p>
                    </div>
                )
            })}
        </section>
        <div className="article-add-comment">
            <p>Comment Form</p>
        </div>
        <div className="single-article-user-response">
            <p>User response</p>
        </div>
    </div>
)
}

export default ArticleComments