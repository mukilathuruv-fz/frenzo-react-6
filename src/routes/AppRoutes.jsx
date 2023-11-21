import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/public/home/page";
import ContactPage from "../pages/public/contact/page";
import AboutPage from "../pages/public/about/page";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/about" index element={<AboutPage />} />
        <Route path="/contact" index element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
