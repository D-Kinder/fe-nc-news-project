import {useParams, Link} from 'react-router-dom'
import { getCommentsByArticleId, getArticleById, addCommentToArticle, deleteComment } from '../Helpers/Api'
import { useEffect, useState } from 'react'
import { UserContext } from './User'
import { useContext } from 'react'
import ErrorComponent from './ErrorComponent'

const ArticleComments = () => {
    const [articleComments, setArticleComments] = useState([])
    const [article, setArticle] = useState({})
    const {article_id} = useParams()
    // const [loggedInUser, setLoggedInUser] = useState({"username":"tickle122","name":"Tom Tickle","avatar_url":"https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"})
    const [successfulPost, setSuccessfulPost] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const {currentUser} = useContext(UserContext)
    const [newComment, setNewComment] = useState({username: currentUser.username, body: ""})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        getCommentsByArticleId(article_id).then(({data}) => {
            setIsLoading(false)
            setArticleComments(data.comments)
        }).catch((err) => {
            setError({err})
            setIsLoading(false)
        })
    }, [article_id])

    useEffect(() => {
        getArticleById(article_id).then(({data}) => {
            setIsLoading(false)
            setArticle(data.article)
        })
    }, [article_id])

    const handleChange = (event) => {
        setNewComment({
            username: currentUser.username,
            body: event.target.value
        })
        setSubmitted(false)
    }

    const handleSubmit = (event) => {

        event.preventDefault()
        setIsLoading(true)
        if(submitted) return

        setSuccessfulPost(null)
        setSubmitted(true)

        addCommentToArticle(article_id, newComment)
        .then(({data})=> {
            setNewComment({username: currentUser.username, body: ""})
            setSuccessfulPost(true)
            setArticleComments((currentArticleComments) => {
                return [data.comment, ...currentArticleComments]
            })
            setIsLoading(false)
        })
        .catch((err) => {
            setSuccessfulPost(false)
        })
        
    }

    const handleDelete = (comment_id) => {
        setIsLoading(true)
        setSuccessfulPost(null)
        deleteComment(comment_id).then(() => {
            const filteredComments = articleComments.filter((comment) => {
                return comment.comment_id !== comment_id
            })
            setArticleComments(filteredComments)
            setSuccessfulPost(true)
            setIsLoading(false)
        }).catch((err) => {
            setSuccessfulPost(false)
        })
    }
    
    if(isLoading) return <p>Loading...</p>
    if(error) {
        return <ErrorComponent message = {error.err.message} code={error.err.response.request.status} />
    }
    return (
    <div className="article-comments-page">
        <div className="back-to-article">
            <Link to={`/articles/${article_id}`}>
                <button>Back to article</button>
            </Link>
        </div>
        <div className="article-title">
        <h2 >{article.title}</h2>
        <p>{article.author}</p>
        </div>
        <section className="single-article-comments">
            {articleComments.map(({author, body, votes, comment_id}) => {
                return(
                    <div className="article-comment" key={comment_id}>
                    <p className="text">{body}</p>
                    <br></br>
                    <p className="text">Author: {author} - Votes: {votes}</p>
                    {currentUser.username === author ? <button 
                    onClick={()=>handleDelete(comment_id)}>Delete</button> : ""}
                    </div>
                )
            })}
            
        </section>
        <div className="article-add-comment">
            <form onSubmit={handleSubmit}>
                <p className="text-blue">Join the conversation and post your own comment!</p>
                <textarea rows="10" onChange={handleChange} name="body" type="text" placeholder="Enter your comment here" value={newComment.body} required/>
                <br></br>
                <button disabled={submitted} type="submit">Submit</button>
            </form>
        </div>
        <div className="single-article-user-response">
            <p className={successfulPost === true ? "visible text-blue" : "hidden"}>Thanks for being a part of the conversation!</p>
            <p className={successfulPost === false ? "visible text-blue" : "hidden"}>Oops, something went wrong! Please try again later</p>
        </div>
    </div>
)
}

export default ArticleComments