import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sorting from "pages/Sorting";
import Home from "pages/Home";
import SortingDetail from "pages/SortingDetail";
import Header from "components/Header";
import Error from "pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="sorting" element={<Sorting />}></Route>
        <Route path="sorting/:type" element={<SortingDetail />}></Route>
        <Route path="error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
