import {Link} from 'react-router-dom'

const ArticleCard = ({article_id, author, body, comment_count, title, topic, votes}) => {
    
    return(
        <div className="article-card">
        <Link to={`/articles/${article_id}`}>
        <article className="single-article">
        <h4>{title}</h4>
        <br></br>
        <p className="text">{author}</p>
        </article>
        </Link>
        </div>
    )
}

export default ArticleCard