// src/App.js
import React, { useState, useEffect } from 'react';
import './App2.css';
import Nav2 from './components2/Nav2';
import Textarea from './components2/Textarea';
function App() {
  const [theme, setTheme] = useState('');

  const handleThemeChange = (newTheme) => {
    if(theme===newTheme){
      setTheme('theme-White')
    }else{

      setTheme(newTheme);
    }
    
  };

  useEffect(() => {
    switch(theme) {
      case 'theme-red':
        document.body.style.backgroundColor = 'red';
        document.querySelector('nav').style.backgroundColor = 'darkred';
        break;
      case 'theme-blue':
        document.body.style.backgroundColor = 'blue';
        document.querySelector('nav').style.backgroundColor = 'darkblue';
        break;
      case 'theme-green':
        document.body.style.backgroundColor = 'green';
        document.querySelector('nav').style.backgroundColor = 'darkgreen';
        break;
      default:
        document.body.style.backgroundColor = 'white';
        document.querySelector('nav').style.backgroundColor = '#353535';
    }
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Nav2 onThemeChange={handleThemeChange} />
      <Textarea theme={theme}/>
    </div>
  );
}

export default App;
