import Layout from './Components/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import CaseStudies from './pages/casestudies'
import Career from './pages/career'
import Contact from './pages/contact'
import WhyChoose from './pages/whychoose'
import Howitworks from './pages/howitworks'



import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Layout >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/case-studies' element={<CaseStudies />} />
          <Route path='/career' element={<Career />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/whychoose' element={<WhyChoose />} />
          <Route path='/howitworks' element={<Howitworks />} />



        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
