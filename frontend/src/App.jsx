import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home';
import Projects from './pages/Projects';
import DataVis from './pages/DataVis';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="page-contents">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/datavis" element={<DataVis />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
