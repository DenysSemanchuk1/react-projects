import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);
  const showSidebar = () => setOpenSidebar(true);
  const closeSidebar = () => setOpenSidebar(false);
  return (
    <AppContext.Provider
      value={{
        openModal,
        openSidebar,
        showModal,
        showSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
