//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';
//definig routers and route
import {Routes,Route} from 'react-router-dom';
//defining components
import Home from './components/Home.jsx';
import Support from './components/Support.jsx';
import About from './components/About.jsx';
import Labs from './components/Labs.jsx';
import NotFound from './components/NotFound.jsx';

import MainHeader from './components/MainHeader.jsx';
//defining links tag
import {Link,NavLink} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li><NavLink to="/support">Support</NavLink></li>
          <li><NavLink to="/labs">Labs</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
         
        </ul>
      </nav>
        
      <Routes>
        {/* default route */}
        <Route path="/" element={<MainHeader/>}>
        <Route index element={<Home/>}/>
         <Route path="/support" element={<Support/>}/>
          <Route path="/about" element={<About/>}/>
           <Route path="/labs" element={<Labs/>}/>
           <Route path="*" element={<NotFound/>}/>
</Route>
      </Routes>
    </div>
  );
}

export default App;
//with the use of use navigate hook we can navigate to fifferent fifferent routes