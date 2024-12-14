
import './App.css'
import {Routes, Route} from "react-router-dom";

import Home from "./Home/home.jsx";
import Login from "./login/login.jsx";
import Register from "./register/register.jsx";



function App() {
  return (
      <>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path='register' element={<Register/>} />
          </Routes>
      </>
  )
}

export default App
