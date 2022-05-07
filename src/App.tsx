import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sorting from "pages/Sorting";
import Home from "pages/Home";
import SortingDetail from "pages/SortingDetail";
import Header from "components/Header";
import Footer from "components/Footer";
import Error from "pages/Error";
import useGlobal from "hooks/useGlobal";

function App() {
  const { darkMode } = useGlobal();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="min-h-screen pb-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="sorting" element={<Sorting />}></Route>
          <Route path="sorting/:type" element={<SortingDetail />}></Route>
          <Route path="error" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
