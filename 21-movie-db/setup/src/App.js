import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movies/:id' element={<Movie />} />
      </Routes>
    </main>
  );
}

export default App;
