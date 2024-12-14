
import './App.css'
import {Routes, Route} from "react-router-dom";

import Home from "./Home/home.jsx";
import Login from "./login/login.jsx";
import Register from "./register/register.jsx";
import Evaluation from "./evaluation/evaluation.jsx";



function App() {
  return (
      <>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path='register' element={<Register/>} />
              <Route path='/evaluation' element={<Evaluation/>}/>
          </Routes>
      </>
  )
}

export default App
