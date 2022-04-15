import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sorting from "pages/Sorting";
import Home from "pages/Home";
import SortingDetail from "pages/SortingDetail";
import Header from "components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="sorting">
          <Route index element={<Sorting />}></Route>
          <Route path=":type" element={<SortingDetail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
