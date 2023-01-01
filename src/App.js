// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode,setmode]=useState('light')
  const toggleMode = () =>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042149'
      showAlert('Dark mode has been enabled','success')
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled','danger')
    }
  }

  const[alert,setAlert]=useState(null)
  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type :type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="Text Modifier" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <Textform showAlert={showAlert} mode={mode}  />
        {/* <Routes>
              <Route exact path="/" element={<Textform showAlert={showAlert} mode={mode}  />}/>
              <Route exact path="/about" element={<About  mode={mode} />}/>
            </Routes> */}
    {/* </Router> */}
    </>
  );
}

export default App;
