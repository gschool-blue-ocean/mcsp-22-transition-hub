import { useState, createContext } from "react";

const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [url, setUrl] = useState("http://localhost:8000");
  //'http://localhost:8000
  //

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
