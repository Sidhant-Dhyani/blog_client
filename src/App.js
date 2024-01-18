import './App.css';
import { Routes, Route } from "react-router-dom";
import CardContainer from './components/card_container/CardContainer';
import Search from './components/search/Search';
import BlogPage from './components/blogpage/BlogPage';

function App() {
  return (
    <div className="App">
      <h1 className='title_heading'>Our Blogs</h1>
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/:title/:id" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;