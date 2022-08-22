import Home from "./Pages/Home/Home";
import Profilepage from "./Pages/Profile/Profile"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Fragment } from "react";
import LoginPage from "./Pages/Login/Login";
import SignupPage from "./Pages/Signup/Signup";

function App() {
  return ( 
    <Fragment>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/profile/:username' element={<Profilepage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
      </Routes>
    </Router>
    </Fragment>
  );
}

export default App;
