import React from "react";
import { useLanguage } from "../LanguageContext";

const Header = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="w-full flex justify-end p-4 bg-white dark:bg-gray-900 gap-2">
      <button
        onClick={() => setLanguage("en")}
        className={`px-4 py-2 rounded-full font-medium shadow transition ${language === "en" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage("he")}
        className={`px-4 py-2 rounded-full font-medium shadow transition ${language === "he" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}
      >
        עברית
      </button>
      <button
        onClick={() => setLanguage("ar")}
        className={`px-4 py-2 rounded-full font-medium shadow transition ${language === "ar" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}
      >
        العربية
      </button>
    </header>
  );
};

export default Header;