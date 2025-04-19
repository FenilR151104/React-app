import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// here Switch is replaced with Routes bcs it's not working.So, we use Routes where Switch is used

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has benn enabled", "success");
      document.title = 'TextUtlis - Dark Mode'; // to change title when dark mode is on
      /*setInterval(() => {
        document.title = 'TextUtlis is Amazing ';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtlis Now';
      }, 1500);   This is used for frequently changing notifications or some information*/
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has benn enabled", "success");
      document.title = 'TextUtlis - Light Mode'; // to change title when light mode is on
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3"> 
      {/* if we uses Routes then all components will be inside the Route as a element={<Home/>} and use exact path instead of path for exact matching*/}
      {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />}> */}
          {/* <About /> */}
        {/* </Route> */}
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}> */}
           <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        {/* </Route> */}
      {/* </Routes> */}
    {/* <About/> */}
    </div>
    {/* </Router> */}
    </>
  );
}
//my-3 used for spacing
export default App;
