import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen flex flex-col bg-black text-white"
          : "min-h-screen flex flex-col bg-white text-black"
      }
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} />}
          />
          <Route
            path="/about"
            element={<About darkMode={darkMode} />}
          />
          <Route
            path="/projects"
            element={<Projects darkMode={darkMode} />}
          />
          <Route
            path="/resume"
            element={<Resume darkMode={darkMode} />}
          />
        </Routes>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;