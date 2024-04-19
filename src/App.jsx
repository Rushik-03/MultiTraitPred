import './App.css'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Predict from './Predict'

const App = ()=>{
  return <Router>
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path={'/'}></Route>
      <Route element={<Predict/>} path={'/predict'}></Route>
    </Routes>
  </Router>
}

export default App
