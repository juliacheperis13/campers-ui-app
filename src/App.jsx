import { lazy, Suspense, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import HomePage from "./pages/HomePage/HomePage";
import { selectError, selectIsLoading } from "./redux/campers/campersSelectors";

const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const CatalogItemPage = lazy(() => import("./pages/CatalogItemPage/CatalogItemPage"));

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
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CatalogItemPage />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {isLoading && <Loader />}
      <Toaster position="top-center" />
    </>
  );
}

export default App;
