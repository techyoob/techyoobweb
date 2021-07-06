

import React, { useState } from 'react';

import './App.css';

import { Header }  from './header';
import { Pages } from './pages';


// const menuItems = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'blog', 'contact', 'resume']
const menuItems = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact', 'resume']


function App() {

  const [ selectedItem, setSelectedItem] = useState("home");

  function navigate(name){  
    setSelectedItem(name);
  }



  return (
    <div className="main-frame-div">
       <div className="header-div">
          <Header
            menuItems={menuItems}
            selectedItem={selectedItem}
            navigate={navigate}
          />
       </div>
       <div className="body-div">
          <Pages
            menuItems={menuItems}
            selectedItem={selectedItem}
            navigate={navigate}
          />
       </div>
    </div>
  );
}


export default App;
