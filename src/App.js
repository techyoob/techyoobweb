

import React, { useState } from 'react';

import './App.css';

import { Header }  from './header';
import { Pages } from './pages';

// const menuItems = ['home', 'about', 'experience','projects','skills', 'education','contact', 'blog', 'resume' ]

const menuItems = ['home', 'about', 'experience']

function App() {

  const [ selectedItem, setSelectedItem] = useState("skills");

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
