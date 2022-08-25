import {Link} from 'react-router-dom'

const NotFound = () => {
   
    return (
        <div className="not-found-page">
            <div className="not-found-message">
                <h2>Oops, this page doesn't exist!</h2>
                <p>Follow the links below to the area you are looking for, or enter a URL in one of the forms below for something more specific</p>
            </div>
            <div className="not-found-articles">
                <Link to="/articles">
                <h3>ARTICLES</h3>
                <br></br>
                <p>/articles/:article_id</p>
                <p>Try: /articles/3</p>
                <br></br>
                <p>/articles/:article_id/comments</p>
                <p>Try: /articles/3/comments</p>
                </Link>
            </div>
            <div className="not-found-topics">
                <Link to="/topics">
                <h3>TOPICS</h3>
                <br></br>
                <p>/topics/:topic_slug</p>
                <br></br>
                <p>Try: /topics/cooking or /topics/football</p>
                </Link>
            </div>
            <div className="not-found-users">
                <Link to="/users">
                <h3>USERS</h3>
                <br></br>
                <p>See all the amazing people that have contributed to the conversations at DK NC News</p>
                </Link>
            </div>
        </div>
    )
}

export default NotFound