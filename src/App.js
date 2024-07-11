import "./App.css";
import Nav from './components/Nav';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
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
    } else if(mode==='dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Lightmode has been enabled", "success");
    }
  }
  const [theme, setTheme] = useState("");
  const redTheme = () => {
    // setMode("");
    setTheme("redNav");
    document.body.style.backgroundColor = '#FFCBCB';

  }
  const blueTheme = () => {
    setTheme("blueNav")
    document.body.style.backgroundColor = '#BAD7E9';
  }
  const goldTheme = () => {
    setTheme("goldNav")
    document.body.style.backgroundColor = '#FFFAB7';
  }
  const whiteTheme = () => {
    setTheme("");
    document.body.style.backgroundColor = 'white';
  }
  return (
    <>
      <Nav title="TextUtils" mode={mode} toggleMode={toggleMode} whiteTheme={whiteTheme} redTheme={redTheme} blueTheme={blueTheme} goldTheme={goldTheme} theme={theme} />
      <Alert alert={alert} />
      <div className="body">
        <div className="flexBox my-3 container">
          <TextForm heading="Enter Text To Analyze" mode={mode} showAlert={showAlert} />
        </div>
        <div className="flexBox container" >
          <About />
        </div>
      </div>
    </>
  );
}
export default App