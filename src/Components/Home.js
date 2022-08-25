import {Link} from 'react-router-dom'

const Home = () => {

    return (
        <div className="home">
        <section id ="home-intro" className="home-links">
            <p>Welcome to DK NC News</p>
            <br></br>
            <p>Read. Write. Comment.</p>
        </section>
        <section id="home-topics" className="home-links">
        <Link to="/topics">TOPICS</Link>
        <br></br>
        <p>View the exciting topics that our collection of articles include!</p>
        </section>
        <section id="home-articles" className="home-links">
        <Link to="/articles">Articles</Link>
        <br></br>
        <p>Jump right in to some exciting articles!</p>
        </section>
        </div>
    )
}

export default Home