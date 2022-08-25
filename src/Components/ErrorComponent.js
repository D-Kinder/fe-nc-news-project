import {Link} from 'react-router-dom'

const ErrorComponent = ({message, code}) => {

    if(code ===400) {
        return(
            <div className="not-found-page">
            <div className="not-found-message">
                <h3>Oops, this page doesn't exist!</h3>
                <p>It looks like you entered an invalid parameter, try entering a valid parameter or follow the links below to help you find what you're looking for!</p>
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
         <div className="not-found-code">
             <p>{message}</p>
         </div>
         </div>
        )
    }

    if(code ===404) {
        return(
            <div className="not-found-page">
            <div className="not-found-message">
                <h3>Oops, this page doesn't exist!</h3>
                <p>It looks like you entered a valid parameter but it doesn't exist in our database! Try a different parameter or follow the links below to help you find what you're looking for!</p>
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
         <div className="not-found-code">
            <p>{message}</p>
         </div>
         </div>
        )
    }
}   

export default ErrorComponent