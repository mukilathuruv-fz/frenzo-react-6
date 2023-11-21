import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/public/home/page";
import ContactPage from "../pages/public/contact/page";
import AboutPage from "../pages/public/about/page";
import NotFoundPage from "../pages/public/404/page";
import LoginPage from "../pages/auth/login/page";
import ProfilePage from "../pages/protected/profile/page";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
