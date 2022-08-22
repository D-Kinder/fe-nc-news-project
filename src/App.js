import Header from './Components/Header';
import {Routes, Route} from 'react-router-dom'
import Articles from './Components/Articles';
import Comments from './Components/Comments';
import Topics from './Components/Topics';
import Home from "./Components/Home"
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
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
