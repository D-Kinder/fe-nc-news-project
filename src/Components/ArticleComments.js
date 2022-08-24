import {useParams, Link} from 'react-router-dom'
import { getCommentsByArticleId, getArticleById, addCommentToArticle } from '../Helpers/Api'
import { useEffect, useState } from 'react'

const ArticleComments = () => {
    const [articleComments, setArticleComments] = useState([])
    const [article, setArticle] = useState({})
    const {article_id} = useParams()
    const [loggedInUser, setLoggedInUser] = useState({"username":"tickle122","name":"Tom Tickle","avatar_url":"https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"})
    const [newComment, setNewComment] = useState({username: loggedInUser.username, body: ""})
    const [successfulPost, setSuccessfulPost] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    
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

    const handleChange = (event) => {
        setNewComment({
            username: loggedInUser.username,
            body: event.target.value
        })
        setSubmitted(false)
    }

    const handleSubmit = (event) => {

        event.preventDefault()
        if(submitted) return

        setSuccessfulPost(null)
        setSubmitted(true)

        addCommentToArticle(article_id, newComment)
        .then(({data})=> {
            setNewComment({username: loggedInUser.username, body: ""})
            setSuccessfulPost(true)
            setArticleComments((currentArticleComments) => {
                return [data.comment, ...currentArticleComments]
            })
        })
        .catch((err) => {
            setSuccessfulPost(false)
        })
        
    }
    
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
            {articleComments.map(({author, body, votes, comment_id}) => {
                return(
                    <div className="article-comment" key={comment_id}>
                    <p>{body}</p>
                    <br></br>
                    <p>Author: {author} - Votes: {votes}</p>
                    </div>
                )
            })}
        </section>
        <div className="article-add-comment">
            <form onSubmit={handleSubmit}>
                <p>Join the conversation and post your own comment!</p>
                <br></br>
                <textarea rows="10" onChange={handleChange} name="body" type="text" placeholder="Enter your comment here" value={newComment.body} required/>
                <br></br>
                <button disabled={submitted} type="submit">Submit</button>
            </form>
        </div>
        <div className="single-article-user-response">
            <p className={successfulPost === true ? "visible" : "hidden"}>Thanks for joining the conversation!</p>
            <p className={successfulPost === false ? "visible" : "hidden"}>Oops, something went wrong! Please try again later</p>
        </div>
    </div>
)
}

export default ArticleComments