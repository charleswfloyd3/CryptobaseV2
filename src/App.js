import './App.css';
import React from 'react';
import SearchBar from './searchbar/searchbar';
import coins from './userParameters/coins.json'
import { Routes, Route}  from 'react-router-dom';
import UserParameters from './userParameters/userParameters';
import Navbar from './navbar/navbar';
import background from './2.webp'
import lightbackground from './bc.jpg'
import Info from './info/info';

function App() {
  let color = "white"
  return (
    <Routes>
        <Route exact path="/" element={<div className="App" style={{backgroundImage: `url(${background})` }}>
          <Navbar colordata={color} navleft={"Learn More"}/>
          <SearchBar placeholder="Enter a cryptocurrency..." data={coins}   />
          {/* <p className="footer">© Cryptobase All rights reserved. 2021</p> */}
          </div>} />
        <Route path="/register" element={<UserParameters  />}/>
        <Route path="/info" element={<Info />}/>

    </Routes>

  );
}

export default App;
