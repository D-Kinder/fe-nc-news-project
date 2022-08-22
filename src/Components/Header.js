import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <>
        <Header>
       <div className="heading">
           <h1 className="title">DK NC News</h1>
           <p className="user">User image</p>
       </div>
       <div className="quicklinks">
           <Link to="/articles">Articles</Link>
           <Link to="/comments">Comments</Link>
           <Link to="/topics">Topics</Link>
       </div>
       </Header>
       </>
    )
}

export default Header