import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Recipes } from "./pages/Recipes";

const App = () => {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/:item/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
