import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // ✅ Load from localStorage or fallback to "en"
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  // ✅ Save to localStorage whenever language changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
