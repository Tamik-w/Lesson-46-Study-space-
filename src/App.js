import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Contacts from './components/Contacts.js';
import News from './components/News.js';
import SinglePost from './components/SinglePost.js'
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <nav className="menu">
          <NavLink className={({ isActive }) => isActive ? "menuLinkActive" : ""}
          to="/"
          >
           Home
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "menuLinkActive" : ""}
          to="/about"
          >
            About
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "menuLinkActive" : ""} 
          to="/contacts"
          >
            Contacts
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "menuLinkActive" : ""} 
          to="/news"
          >
            News
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path='/news' element={<News />} />

          <Route path='/news/:id' element={<SinglePost />}/>

          <Route path='*' element={<h1>Not Found</h1>} />

        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;