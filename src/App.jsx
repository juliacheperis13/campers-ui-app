// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CatalogItemPage from "./pages/CatalogItemPage/CatalogItemPage";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import { selectIsLoading } from "./redux/campers/campersSelectors";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CatalogItemPage />}></Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {isLoading && <Loader />}
    </>
  );
}

export default App;
