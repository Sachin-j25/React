import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import IndexComponent from './component/IndexComponent';
import HomeComponent from './component/HomeComponent';
import AboutComponent from './component/AboutComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={<IndexComponent/>}></Route>
          <Route path="/Home" element={<HomeComponent/>} />
          <Route path = "/about" element={<AboutComponent/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
