import {Link} from 'react-router-dom'
import { UserContext } from './User'
import { useContext } from 'react'

const Header = () => {
    const {currentUser} = useContext(UserContext)

    return(
        <header className="top">
       <div className="heading">
           <h1 className="title">DK NC News</h1>
           <Link to="/users" className="user">
               <p>{currentUser.username}</p>
               <img className="user-avatar" src={currentUser.avatar_url} alt={currentUser.username}></img>
           </Link>
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