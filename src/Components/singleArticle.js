import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { getArticleById, changeArticleVotes } from '../Helpers/Api'

const SingleArticle = () => {
    const [singleArticle, setSingleArticle] = useState({})
    const [optimisticVotes, setOptimisticVotes] = useState(0)
    const [successfulVote, setSuccessfulVote] = useState(null)
    const {article_id} = useParams()

    useEffect(() => {
        getArticleById(article_id).then((data) => {
            setSingleArticle(data.data.article)
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
            <Link to={`/articles/${singleArticle.article_id}/comments`}>View Comments: {singleArticle.comment_count}</Link>
        </div>
        <div className="rate-it">
            <button onClick={() => {changeVote(1)}}>Like it</button>
            <p>Votes: {singleArticle.votes + optimisticVotes}</p>
            <button onClick={() => {changeVote(-1)}}>Dislike it</button>
        </div>
        <div className="pop-up">
            <p className={successfulVote === true ? "visible" : "hidden"}>Thanks for your vote!</p>
            <p className={successfulVote === false ? "visible" : "hidden"}>Oops, something went wrong! Please try again later</p>
        </div>
        </div>
    )
    
}

export default SingleArticle