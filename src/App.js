import Header from './Components/Header';
import {Routes, Route} from 'react-router-dom'
import Articles from './Components/Articles';
import Comments from './Components/Comments';
import Topics from './Components/Topics';
import Home from "./Components/Home"
import Endpoints from "./Components/Endpoints"
import SingleArticle from './Components/singleArticle';
import TopicArticles from './Components/TopicArticles';
import ArticleComments from './Components/ArticleComments';
import Users from './Components/Users';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/articles" element={<Articles />}/>
        <Route path="/comments" element={<Comments />}/>
        <Route path="/topics" element={<Topics />}/>
        <Route path="/topics/:topic_slug" element={<Articles />}/>
        <Route path="/endpoints" element={<Endpoints />}/>
        <Route path="/articles/:article_id" element={<SingleArticle />}/>
        <Route path="/articles/:article_id/comments" element={<ArticleComments/>}/>
        <Route path="/users" element={<Users />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
