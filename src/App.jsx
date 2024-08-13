import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flew-row relative flex min-h-screen bg-[#13131a] p-4">
      <div className="relative mr-10 hidden sm:flex">
        <Sidebar />
      </div>

      <div className="mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:pr-5">
        {/* Navbar */}
        <Navbar />
        <Routes>
          <Route path="/" element={Home} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
