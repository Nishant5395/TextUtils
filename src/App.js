// import './App.css';
// // import About from './components/About';
// import Navbar from './components/Navbar';
//  import TextForm from './components/TextForm';
//  import About from './components/About';
// import React,{useState} from 'react';
// import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

// function App() {
//   const [mode, setmode] = useState('light');
//   const [alert, setAlert] = useState(null);
//   const showAlert = (message,type)=>{
//     setAlert({
//       msg:message,
//       type:type
//     })
//     setTimeout(()=>{
//       setAlert(null);
//     },2000);
//   }

//  const toggleMode=()=>{
//   if(mode==='light'){
//   setmode('dark');
//   document.body.style.backgroundColor='#042743';
//   showAlert("Dark mode has been enabled","success");
// }
// else{
//   setmode('light');
//   document.body.style.backgroundColor='white';
//   showAlert("Light mode has been enabled","success");
// }
//   }
//   return (
//     <>
// {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
// <Router>
// <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
// <Alert alert={alert}/>
// <div className="container">

// <Switch>
//           <Route exact path="/about">
//             <About />
//           </Route>
//           <Route exact path="/">
//           <TextForm showAlert={showAlert} heading="Enter the text below" mode={mode}/>
//           </Route>
//   </Switch>
//   </div>
//   </Router>
//   {/* <About/> */}
 
//     </>
//   );
// }

// export default App;
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,  
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextUtils-Word counter,Character Counter" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
