
import './App.css'
import { Login } from './pages/Login'
import Dashboard from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreateContentModel } from './component/ui/CreateContentModel'
import HeroSection from './pages/Hero'
import Layout from './pages/NotFound'
import SharePage from './pages/SharePage'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<Layout/>}/>
      <Route path='/' element={<HeroSection/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Dashboard/content' element={<CreateContentModel/>}/>
      <Route path='/share/:hash' element={<SharePage/>}/>

    </Routes>
    </BrowserRouter>
 
  )  
  
   
   
}

export default App
