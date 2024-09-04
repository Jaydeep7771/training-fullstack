import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import CourseDetail from './components/CourseDetails'
import Footer from './components/Footer'
import Login from './components/Login'
import Chatbot from './components/Chatbot'
// import Dashboard from './components/Home components/Dashboard'

import Signup from './components/Signup'
import Engineering from './components/Nav compo/Engineering'
// import AdminDashboard from './components/Admin/AdminDashboard'
import AdminHome from './components/Admin/AdminHome'
import CourseManagement from './components/Admin/CourseManagement'
import UserManagement from './components/Admin/UserManagement'
import AboutUs from './components/Nav compo/AboutUs'
import UserDashboard from './components/Home components/UserDashboard'
import UserProfile from './components/Home components/UserProfile'
import ProtectedLogin from './ProtectedRoutes/ProtectedLogin'
// import Dashboard from './components/Home components/Dashboard'

function App() {
    const [loggedIn,setLoggedIn]=useState(localStorage.getItem('loggedIn')|| false);

  return (
   
    
<div>

<BrowserRouter>
<Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/admin' element={<AdminHome/>}/>
  <Route path='/aboutus' element={<AboutUs/>}/>
  <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/engineering' element={<Engineering/>}/>
  <Route path='/dashboard'>
    <Route path="userdashboard" element={<UserDashboard/>}/>
    <Route path="user" element={
      <ProtectedLogin>
        <UserProfile/>
      </ProtectedLogin>}
    />
  </Route>
  {/* <Route path='/dashboard/user' element={<UserProfile/>}/> */}
  <Route path='/courses/:id' element={<CourseDetail/>}/>
  <Route path='/admin/courses' element={<CourseManagement/>}/>
  <Route path='/admin/users' element={<UserManagement/>}/>

</Routes>
<Footer/>
</BrowserRouter>
</div>


  )
}

export default App
