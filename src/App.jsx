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
 className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
   menuOpen 
   ? "opacity-100 pointer-events-auto"
   : "opacity-0 pointer-events-none"
 }`}
>
 <FullScreenNav setMenuOpen={setMenuOpen}/>
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
        onComplete={() => {
          console.log("onComplete fired");
          setMenuOpen(true);
          setPlayMenuAnim(false);
        }}
      />
    </div>
  );
};

export default App;
