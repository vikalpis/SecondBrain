
import './App.css'
import { Login } from './pages/Login'
import Dashboard from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>

    </Routes>
    </BrowserRouter>
 
  )  
  
   
   
}

export default App
