// import { useState } from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'lucide-react'
import Owner from './owner';
import AddHome from './addHome';
import UpdateHome from './updateHome';
import HomePage from './homePage';
import User from './user';
import Signup from './LoginSignup/Signup';
import Login from "./LoginSignup/Login";
import About from './AboutPage/About';
// import { Contact } from 'lucide-react';
import Contact from './ContactPage/Contact'
import Login_user from './LoginSignup/login_user';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div>
        
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/owner' element={<Owner/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/user_login' element={<Login_user/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/user' element={<User/>}></Route>
          <Route path='AddHome/' element={<AddHome/>}></Route>
          <Route path='update/:id/' element={<UpdateHome/>}></Route>
        </Routes>
      </BrowserRouter>  
      
    </div>
      
    </>
  )
}

export default App
