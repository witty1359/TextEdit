import React,{useState} from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/Text';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      showAlert("Light mode has been enabled","success");
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark');
      showAlert("Dark mode has been enabled","success");
      document.body.style.backgroundColor='#032049';
    }
  }


  return (
    <>
      {/* <Router> */}
        <Navbar title={"TextEdit"} mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        {/* <Routes> */}
        <Text mode={mode} showAlert={showAlert}/>
                {/* <Route exact path="/"element={<Text mode={mode} showAlert={showAlert}/>} />
                <Route exact path="/about" element={<About />} /> */}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
