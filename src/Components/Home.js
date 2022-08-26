import {Link} from 'react-router-dom'

const Home = () => {

    return (
        <div className="home">
        <section id ="home-intro" className="home-links">
            <h4>Welcome to DK NC News</h4>
            <br></br>
            <p>Read. Write. Comment.</p>
        </section>
        <Link to="/topics">
        <section id="home-topics" className="home-links">
        <h4>TOPICS</h4>
        <br></br>
        <p>View the exciting topics that our community of writers are excited about</p>
         </section>
        </Link>
        <Link to="/articles">
        <section id="home-articles" className="home-links">
        <h4>ARTICLES</h4>
        <br></br>
        <p>Explore the exciting content on offer</p>
        </section>
        </Link>
        <Link to="/users">
        <section id="home-users" className="home-links">
        <h4>USERS</h4>
        <br></br>
        <p>See the people behind the ideas</p>
        </section>
        </Link>
        </div>
    )
}

export default Home