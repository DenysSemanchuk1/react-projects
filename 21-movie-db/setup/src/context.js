import React, { useState, useContext, useEffect } from "react";
import useFetch from "./useFetch";
// make sure to use https
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { data: movies, loading, error } = useFetch(`&s=${query}`);
  return (
    <AppContext.Provider
      value={{
        movies,
        loading,
        query,
        error,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
