import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { LanguageProvider } from "./LanguageContext";
import Header from "./compentents/Header";
import Footer from "./compentents/Footer";
import ScrollToTop from "./compentents/ScrollToTop";

// Pages
import Login from "./pages/Login";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import EngineOptimization from "./pages/EngineOptimization";
import PayPerClick from "./pages/PayPerClick";
import ContentMarketing from "./pages/ContentMarketing";
import SocialMedia from "./pages/SocialMedia";
import WebDesign from "./pages/WebDesign";
import AnalyticsReporting from "./pages/AnalyticsReporting";
import AdminDashboard from "./pages/AdminDashboard";

// Custom hook for dark mode
const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return { darkMode, toggleDarkMode };
};

// Layout wrapper
const AppLayout = ({ children }) => {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useDarkMode();

  // Apply theme to html
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  // Hide Header/Footer on login page
  const showHeaderAndFooter = location.pathname !== "/login";

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
      {showHeaderAndFooter && (
        <Header toggleTheme={toggleDarkMode} isDark={darkMode} />
      )}

      {/* Content starts below the fixed header */}
      <main className="flex-1 p-0 m-0 mt-16">
        <ScrollToTop />
        {children}
      </main>

      {showHeaderAndFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <AppLayout>
      <Routes>
        {/* Always land on login when server starts */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/EngineOptimization" element={<EngineOptimization />} />
        <Route path="/payperclick" element={<PayPerClick />} />
        <Route path="/contentmarketing" element={<ContentMarketing />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
        <Route path="/webdesign" element={<WebDesign />} />
        <Route path="/analyticsreporting" element={<AnalyticsReporting />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />

        {/* Catch all unknown routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
