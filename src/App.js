import Header from './Components/Header';
import {Routes, Route} from 'react-router-dom'
import Articles from './Components/Articles';
import Topics from './Components/Topics';
import Home from "./Components/Home"
import Endpoints from "./Components/Endpoints"
import SingleArticle from './Components/singleArticle';
import TopicArticles from './Components/TopicArticles';
import ArticleComments from './Components/ArticleComments';
import Users from './Components/Users';
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from './Components/User';
import {useState} from 'react'
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({"username":"tickle122","name":"Tom Tickle","avatar_url":"https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"})

  return (
    <BrowserRouter>
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/articles" element={<Articles />}/>
        <Route path="/topics" element={<Topics />}/>
        <Route path="/topics/:topic_slug" element={<Articles />}/>
        <Route path="/endpoints" element={<Endpoints />}/>
        <Route path="/articles/:article_id" element={<SingleArticle />}/>
        <Route path="/articles/:article_id/comments" element={<ArticleComments/>}/>
        <Route path="/users" element={<Users />}/>
      </Routes>
    </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
