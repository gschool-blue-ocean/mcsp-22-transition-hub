import { useState, createContext } from "react";

const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [url, setUrl] = useState("https://transition-hub.onrender.com/");

  return (
    <UrlContext.Provider
      value={{
        url,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
};

export default UrlContext;
