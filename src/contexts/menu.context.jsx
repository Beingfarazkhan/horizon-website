/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MenuContext = createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const value = {
    isMenuOpen,
    toggleMenu,
    setIsMenuOpen,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
