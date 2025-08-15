
import './App.css'
import { Login } from './pages/Login'
import Dashboard from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreateContentModel } from './component/ui/CreateContentModel'
import HeroSection from './pages/Hero'
import LearnMore from './pages/LearnMore'
import HowItWorks from './pages/HowItWorks'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HeroSection/>}/>
      <Route path="/learn-more" element={<LearnMore />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Dashboard/content' element={<CreateContentModel/>}/>

    </Routes>
    </BrowserRouter>
 
  )  
  
   
   
}

export default App
