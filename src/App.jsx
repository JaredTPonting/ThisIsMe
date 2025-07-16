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
import ExtrasHome from "./pages/ExtrasHome";
import WorkoutApp from './pages/workoutAssistant/WorkoutApp';
import "./styles/App.css"


function App() {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useLayoutEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        console.log("Navbar Ref:", navRef.current);
        const height = navRef.current.offsetHeight;
        console.log("Navbar height (offsetHeight):", height);
        setNavHeight(height);
      }
    };

    updateNavHeight();

    window.addEventListener("resize", updateNavHeight);

    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

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
          <Route path="/extras" element={<ExtrasHome />} />
          <Route path="/extras/workout" element={<WorkoutApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
