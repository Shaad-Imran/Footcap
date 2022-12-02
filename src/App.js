import "./App.css";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import BestSellers from "./pages/BestSellers";
import TodaySpecial from "./pages/TodaySpecial";
import Services from "./pages/Services";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/todayspecial" element={<TodaySpecial />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <GoToTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
