import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { getArticleById, changeArticleVotes } from '../Helpers/Api'
import ErrorComponent from './ErrorComponent'

const SingleArticle = () => {
    const [singleArticle, setSingleArticle] = useState({})
    const [optimisticVotes, setOptimisticVotes] = useState(0)
    const [successfulVote, setSuccessfulVote] = useState(null)
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getArticleById(article_id).then((data) => {
            setSingleArticle(data.data.article)
            setIsLoading(false)
        }).catch((err) => {
            setError({err})
            setIsLoading(false)
        })
    }, [article_id])
    
    const changeVote = (voteChange) => {
    
        setSuccessfulVote(null)
        setOptimisticVotes((currentOptimisticVotes) => {
            return currentOptimisticVotes + voteChange
        })
        changeArticleVotes(article_id, voteChange)
        .then(() => {
            setSuccessfulVote(true)
        })
        .catch((err) => {
            setOptimisticVotes((currentOptimisticVotes) => {
                return currentOptimisticVotes - voteChange
            })
            setSuccessfulVote(false)
        })
    }
    const date = new Date(singleArticle.created_at).toGMTString()
   
    if(isLoading) return <p>Loading...</p>
    if(error) {
        return <ErrorComponent message = {error.err.message} code={error.err.response.request.status} />
    }
    return (
        <div className="single-article-page">
        <Link to="/articles" className="back-to-articles">
        <button >Back to Articles</button>
        </Link>
        <div className="single-article">
        <h4>{singleArticle.title}</h4>
        <br></br>
        <p className="text">Author: {singleArticle.author}</p>
        <br></br>
        <p className="text">Topic: {singleArticle.topic}</p>
        <br></br>
        <p className="text">Date Created: {date}</p>
        <br></br>
        <br></br>
        <p className="text">{singleArticle.body}</p>
        </div>
        <div className="article-comments">
            <Link className="text-blue" to={`/articles/${singleArticle.article_id}/comments`}>View Comments: {singleArticle.comment_count}</Link>
        </div>
        <div className={successfulVote === true ? "rated-it" : "rate-it"}>
            <button disabled={successfulVote} onClick={() => {changeVote(1)}}>Like this comment</button>
            <p className="text-blue">Votes: {singleArticle.votes + optimisticVotes}</p>
            <button disabled={successfulVote} onClick={() => {changeVote(-1)}}>Dislike this comment</button>
        </div>
        <div className="pop-up">
            <p className={successfulVote === true ? "visible text-blue" : "hidden"}>Thanks for your vote!</p>
            <p className={successfulVote === false ? "visible text-blue" : "hidden"}>Oops, something went wrong! Please try again later</p>
        </div>
        </div>
    )
    
}

export default SingleArticle