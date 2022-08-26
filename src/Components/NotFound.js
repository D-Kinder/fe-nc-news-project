import {Link} from 'react-router-dom'

const NotFound = () => {
   
    return (
        <div className="not-found-page">
            <div className="not-found-message">
                <h2>Oops, this page doesn't exist!</h2>
                <p>Looks like you entered an incorrect pathway.  Follow the links below to the area you are looking for, or enter a URL in one of the forms below for something more specific</p>
            </div>
            <div className="not-found-links">
            <div className="not-found-articles">
                <Link to="/articles">
                <h4>ARTICLES</h4>
                <br></br>
                <p className="text">/articles/:article_id</p>
                <p className="text">Try: /articles/3</p>
                <br></br>
                <p className="text">/articles/:article_id/comments</p>
                <p className="text">Try: /articles/3/comments</p>
                </Link>
            </div>
            <div className="not-found-topics">
                <Link to="/topics">
                <h4>TOPICS</h4>
                <br></br>
                <p className="text">/topics/:topic_slug</p>
                <br></br>
                <p className="text">Try: /topics/cooking or /topics/football</p>
                </Link>
            </div>
            <div className="not-found-users">
                <Link to="/users">
                <h4>USERS</h4>
                <br></br>
                <p className="text">See all the amazing people that have contributed to the conversations at DK NC News</p>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default NotFound