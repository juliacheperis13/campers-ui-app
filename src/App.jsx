import { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import CatalogItemPage from "./pages/CatalogItemPage/CatalogItemPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { selectIsLoading, selectError } from "./redux/campers/campersSelectors";

function App() {
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectError);

  useEffect(() => {
    if (errorMessage) {
      if (errorMessage.status === 404) {
        toast.error("Information is not found!");
      } else {
        toast.error("Something went wrong!");
      }
    }
  }, [errorMessage]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CatalogItemPage />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {isLoading && <Loader />}
      <Toaster position="top-center" />
    </>
  );
}

export default App;
