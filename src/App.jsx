import react from "react"
import { useRef, useState, useEffect, useLayoutEffect  } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails'
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from "./components/Navbar";
import "./styles/App.css"


function App() {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useLayoutEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        console.log("Navbar Ref:", navRef.current); // Ensure the ref is correct
        const height = navRef.current.offsetHeight;
        console.log("Navbar height (offsetHeight):", height); // Debug height value
        setNavHeight(height);
      }
    };

    updateNavHeight(); // Measure height after the render

    window.addEventListener("resize", updateNavHeight); // Recalculate on resize

    return () => window.removeEventListener("resize", updateNavHeight); // Cleanup
  }, []); // Empty dependency ensures this runs once after mount

  return (
    <BrowserRouter>
      <Navbar ref={navRef}/>
      <div className="contents" style={{ paddingTop: `${navHeight}px` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
