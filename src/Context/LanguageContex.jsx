import { createContext, useState } from "react";
import translations from "./translations.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
