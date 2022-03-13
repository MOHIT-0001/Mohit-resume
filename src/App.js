import './App.css';

import React from 'react'

import Sidebar from './component/Sidebar.js';
import About from './component/About.js'
import Profileimg from './component/Profileimg.js'
import Contact from './component/Contact.js'
import Works from './component/Works.js'
import Resume from './component/Resume.js'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect

} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <div id="container">
          <Profileimg />
          <div className="container">
            <div id="content">
              <Sidebar />
              <main id="main">
                
                <article>
                  <Routes>
                    {/* <Route path="/" exact render={()=>(<Redirect to="/about"/>)}/> */}
                    <Route path="/" element={<About />} />

                    <Route path="about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/resume" element={<Resume />} />
                  </Routes>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

