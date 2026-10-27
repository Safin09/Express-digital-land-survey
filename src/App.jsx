
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/mainLayout'
import Home from './pages/home'
import Services from './pages/services'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
