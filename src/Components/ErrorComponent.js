import {Link} from 'react-router-dom'

const ErrorComponent = ({message, code}) => {

    if(code ===400) {
        return(
            <div className="not-found-page">
            <div className="not-found-message">
                <h2>Oops, this page doesn't exist!</h2>
                <br></br>
                <p className="text-blue">It looks like you entered an invalid parameter, try entering a valid parameter or follow the links below to help you find what you're looking for!</p>
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
         <div className="not-found-code">
             <p className="text-blue">{message}</p>
         </div>
         </div>
         </div>
        )
    }

    if(code ===404) {
        return(
            <div className="not-found-page">
            <div className="not-found-message">
                <h2>Oops, this page doesn't exist!</h2>
                <br></br>
                <p className="text-blue">It looks like you entered an invalid parameter, try entering a valid parameter or follow the links below to help you find what you're looking for!</p>
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
         <div className="not-found-code">
             <p className="text-blue">{message}</p>
         </div>
         </div>
         </div>
        )
    }
}   

export default ErrorComponent