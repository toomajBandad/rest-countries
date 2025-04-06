import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import TopHeader from "./components/TopHeader/TopHeader";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(() => {
    // console.log("changed");
    document.querySelector(".App").className = "App";
    if (darkTheme) {
      document.querySelector(".App").classList.add("dark");
    } else {
      document.querySelector(".App").classList.add("light");
    }
  }, [darkTheme]);

  return (
    <div className="App">
      <TopHeader darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:country" element={<Details />} />
      </Routes>
    </div>
  );
}
