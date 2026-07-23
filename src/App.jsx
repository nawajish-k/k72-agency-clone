import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavStairs from "./components/common/NavStairs";
import FullScreenNav from "./components/navbar/FullScreenNav";
import Navbar from "./components/navbar/Navbar";
import Agence from "./pages/Agence";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [playMenuAnim, setPlayMenuAnim] = useState(false);
  console.log({
    menuOpen,
    playMenuAnim,
  });
  return (
    <div>
      <div
        id="menu-wrapper"
        className={`fixed inset-0 z-[100] ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none hidden"
        }`}
      >
        <FullScreenNav setMenuOpen={setMenuOpen} />
      </div>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setPlayMenuAnim={setPlayMenuAnim}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <NavStairs
        isOpen={playMenuAnim}
        onCovered={() => {
          setMenuOpen(true);
        }}
        onComplete={() => {
          setPlayMenuAnim(false);
        }}
      />
    </div>
  );
};

export default App;
