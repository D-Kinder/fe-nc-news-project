import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header className="top">
       <div className="heading">
           <h1 className="title">DK NC News</h1>
           <Link to="/users" className="user">User image</Link>
       </div>
       <div className="quicklinks">
           <Link to="/">Home</Link>
           <Link to="/articles">Articles</Link>
           <Link to="/comments">Comments</Link>
           <Link to="/topics">Topics</Link>
       </div>
       </header>
    )
}

export default Header