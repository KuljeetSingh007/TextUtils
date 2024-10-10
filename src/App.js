import "./App.css";
import Nav from './components/Nav';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useEffect, useState } from 'react';
import Alert from "./components/Alert";
function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1700);
  }
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#323840';
      showAlert("Darkmode has been enabled", "warning");
    } else if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Lightmode has been enabled", "success");
    }
  }
  const [mtheme, setmtheme] = useState('white-Theme');
  const [color, setcolor] = useState('');
  const [border, setborder] = useState('');
  const handleThemeChange = (newTheme) => {
    if (mtheme === newTheme) {
      setmtheme('');
      setborder('');
    } else {
      setmtheme(newTheme);
    }
  };
  useEffect(() => {
    switch (mtheme) {
      case 'redNav':
        setcolor('redColor');
        setborder('redBorder');
        document.body.style.backgroundColor = '#FCF6F5';
        // document.querySelector('nav').style.backgroundColor = '#FF6666';
        document.querySelector('nav').style.backgroundColor = '#990011';
        break;
      case 'blueNav':
        setborder('blueBorder')
        setcolor('blueColor');
        document.body.style.backgroundColor = '#F4F6FF';
        document.querySelector('nav').style.backgroundColor = '#8AAAE5';
        break;
      case 'goldNav':
        setborder('goldBorder')
        setcolor('goldColor');
        document.body.style.backgroundColor = '#ffffff';
        document.querySelector('nav').style.backgroundColor = '#e29b00';
        break;
      case 'whiteNav':
        setborder('whiteBorder')
        setcolor('whiteColor');
        document.body.style.backgroundColor = '#f8fbff';
        document.querySelector('nav').style.backgroundColor = '#bac6d1';
        break;
      default:
        setcolor('');
        document.body.style.backgroundColor = mode === 'light' ? 'white' : '#323840';
        document.querySelector('nav').style.backgroundColor = mode === 'light' ? '#f8f9fa' : '#212529';
    }
  }, [mtheme, mode]);
  return (
    <>
      <Nav title="TextUtils" mode={mode} mtheme={mtheme} toggleMode={toggleMode} onThemeChange={handleThemeChange} />

      <Alert alert={alert} />

      <div className="">
        <div className="flexBox my-3 container">
          <TextForm heading="Enter Text To Analyze" mode={mode} txtcolor={color} border={border} showAlert={showAlert} />
        </div>
        {/* <div className="flexBox container" >
          <About />
        </div> */}
      </div>

    </>
  );
}
export default App