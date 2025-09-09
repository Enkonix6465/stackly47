import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import sun from "../images/sun.jpg";
import moon from "../images/moon.svg";
import logo from "../images/stacklyy.png"; 
import { useLanguage } from "../LanguageContext";

const translations = {
  en: {
    home: "Home",
    home1: "Home 1",
    home2: "Home 2",
    about: "About Us",
    services: "Services",
    seo: "Search Engine Optimization",
    ppc: "Pay-Per-Click Advertising",
    content: "Content Marketing",
    social: "Social Media Management",
    web: "Web Design & UX",
    analytics: "Analytics & Reporting",
    blog: "Blog",
    contact: "Contact Us",
    logout: "Logout",
    english: "English",
    arabic: "العربية",
    hebrew: "עברית",
  },
  ar: {
    home: "الرئيسية",
    home1: "الصفحة الرئيسية 1",
    home2: "الصفحة الرئيسية 2",
    about: "معلومات عنا",
    services: "الخدمات",
    seo: "تحسين محركات البحث",
    ppc: "إعلانات الدفع لكل نقرة",
    content: "التسويق بالمحتوى",
    social: "إدارة وسائل التواصل الاجتماعي",
    web: "تصميم المواقع وتجربة المستخدم",
    analytics: "التحليلات والتقارير",
    blog: "المدونة",
    contact: "اتصل بنا",
    logout: "تسجيل خروج",
    english: "English",
    arabic: "العربية",
    hebrew: "עברית",
  },
  he: {
    home: "בית",
    home1: "בית 1",
    home2: "בית 2",
    about: "עלינו",
    services: "שירותים",
    seo: "קידום אתרים במנועי חיפוש",
    ppc: "פרסום בתשלום לפי קליק",
    content: "שיווק תוכן",
    social: "ניהול מדיה חברתית",
    web: "עיצוב אתרים וחווית משתמש",
    analytics: "ניתוח ודיווח",
    blog: "בלוג",
    contact: "צור קשר",
    logout: "התנתק",
    english: "English",
    arabic: "العربية",
    hebrew: "עברית",
  },
};

const Header = ({ toggleTheme, isDark }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [initials, setInitials] = useState("");
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const avatarRef = useRef(null);
  const languageRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const t = translations[language];

  // ✅ Set direction based on language
  useEffect(() => {
    document.documentElement.setAttribute("dir", language === "ar" || language === "he" ? "rtl" : "ltr");
  }, [language]);

  // Get user initials
  const getUserInitials = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInEmail = localStorage.getItem("loggedInUserEmail");
    const currentUser = users.find((user) => user.email === loggedInEmail);

    if (currentUser) {
      const firstInitial =
        currentUser.firstName?.trim().charAt(0).toUpperCase() || "";
      const lastInitial =
        currentUser.lastName?.trim().charAt(0).toUpperCase() || "";
      return firstInitial + lastInitial;
    }
    return "";
  };

  useEffect(() => {
    setInitials(getUserInitials());
    const handleStorage = () => setInitials(getUserInitials());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [location.pathname]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAvatarDropdownOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(e.target)) {
        setLanguageDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Responsive nav close
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileNavOpen) {
        setMobileNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileNavOpen]);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  const handleMainClick = (page) => {
    navigate(`/${page}`);
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  const getActiveLink = () => {
    if (location.pathname === "/" || location.pathname === "/home2")
      return "home";
    if (location.pathname === "/about") return "about";
    if (
      [
        "/services",
        "/EngineOptimization",
        "/payperclick",
        "/contentmarketing",
        "/socialmedia",
        "/webdesign",
        "/analyticsreporting",
      ].includes(location.pathname)
    )
      return "services";
    if (location.pathname === "/blog") return "blog";
    if (location.pathname === "/contact") return "contact";
    return "";
  };

  const activeLink = getActiveLink();

  const toggleAvatarDropdown = () => setAvatarDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUserEmail");
    setAvatarDropdownOpen(false);
    navigate("/login");
  };

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-black dark:text-gray-100 flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700 z-50">
      {/* Logo */}
      <nav className="flex-shrink-0">
        <Link to="/home1">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
      </nav>

      {/* Hamburger (mobile only) */}
      <button
        className={`md:hidden flex flex-col gap-1.5 ${
          mobileNavOpen ? "open" : ""
        }`}
        aria-label="Toggle menu"
        onClick={toggleMobileNav}
      >
        <span className="w-6 h-0.5 bg-current transition-all"></span>
        <span className="w-6 h-0.5 bg-current transition-all"></span>
        <span className="w-6 h-0.5 bg-current transition-all"></span>
      </button>

      {/* Nav Links */}
      <nav
        className={`${
          mobileNavOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:items-center md:gap-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent px-6 py-4 md:p-0 shadow md:shadow-none`}
      >
        {/* Home */}
        <div className="relative">
          <span
            className={`cursor-pointer font-medium ${
              activeLink === "home1" ? "text-blue-700 dark:text-blue-400" : ""
            }`}
            onClick={() => handleMainClick("home1")}
          >
            {t.home}
          </span>
          <span
            className="ml-1 text-xs cursor-pointer"
            onClick={() => toggleDropdown("home")}
          >
            ▼
          </span>
          {activeDropdown === "home" && (
            <div className="absolute left-0 mt-2 flex flex-col bg-gray-100 dark:bg-gray-800 rounded shadow-md min-w-[160px] z-50">
              <Link
                to="/home1"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {t.home1}
              </Link>
              <Link
                to="/home2"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {t.home2}
              </Link>
            </div>
          )}
        </div>

        {/* About */}
        <Link
          to="/about"
          onClick={handleLinkClick}
          className={`font-medium ${
            activeLink === "about" ? "text-blue-700 dark:text-blue-400" : ""
          }`}
        >
          {t.about}
        </Link>

        {/* Services */}
        <div className="relative">
          <span
            className={`cursor-pointer font-medium ${
              activeLink === "services" ? "text-blue-700 dark:text-blue-400" : ""
            }`}
            onClick={() => handleMainClick("services")}
          >
            {t.services}
          </span>
          <span
            className="ml-1 text-xs cursor-pointer"
            onClick={() => toggleDropdown("services")}
          >
            ▼
          </span>
          {activeDropdown === "services" && (
            <div className="absolute left-0 mt-2 flex flex-col bg-gray-100 dark:bg-gray-800 rounded shadow-md min-w-[200px] z-50">
              {[
                { to: "/EngineOptimization", label: t.seo },
                { to: "/payperclick", label: t.ppc },
                { to: "/contentmarketing", label: t.content },
                { to: "/socialmedia", label: t.social },
                { to: "/webdesign", label: t.web },
                { to: "/analyticsreporting", label: t.analytics },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={handleLinkClick}
                  className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Blog */}
        <Link
          to="/blog"
          onClick={handleLinkClick}
          className={`font-medium ${
            activeLink === "blog" ? "text-blue-700 dark:text-blue-400" : ""
          }`}
        >
          {t.blog}
        </Link>

        {/* Contact */}
        <Link
          to="/contact"
          onClick={handleLinkClick}
          className={`font-medium ${
            activeLink === "contact" ? "text-blue-700 dark:text-blue-400" : ""
          }`}
        >
          {t.contact}
        </Link>
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Language Selector */}
        <div ref={languageRef} className="relative">
          <button
            onClick={() => setLanguageDropdownOpen((prev) => !prev)}
            className="px-3 py-1 border rounded-md text-sm bg-gray-200 dark:bg-gray-700"
          >
            {language === "en" ? t.english : language === "ar" ? t.arabic : t.hebrew}
          </button>
          {languageDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-md min-w-[120px] z-50">
              <button
                onClick={() => { setLanguage("en"); setLanguageDropdownOpen(false); }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {t.english}
              </button>
              <button
                onClick={() => { setLanguage("ar"); setLanguageDropdownOpen(false); }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {t.arabic}
              </button>
              <button
                onClick={() => { setLanguage("he"); setLanguageDropdownOpen(false); }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {t.hebrew}
              </button>
            </div>
          )}
        </div>

        {/* Theme Toggle with images */}
        <button onClick={toggleTheme} className="w-8 h-8">
          <img
            src={isDark ? sun : moon}
            alt={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="w-full h-full object-contain cursor-pointer"
          />
        </button>

        {/* Avatar */}
        <div ref={avatarRef} className="relative">
          <div
            className="w-10 h-10 bg-blue-800 text-white flex items-center justify-center rounded-full font-bold cursor-pointer"
            onClick={toggleAvatarDropdown}
          >
            {initials || "AD"}
          </div>
          {avatarDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-md min-w-[120px] z-50">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {t.logout}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
