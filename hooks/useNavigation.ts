import { useState } from "react";

const useNavigation = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { name: "Home", route: "home" },
    { name: "About", route: "about" },
    { name: "Portfolio", route: "portfolio" },
    { name: "Contact", route: "contact" },
  ];

  const handleItemClick = (name: string) => {
    setActiveItem(name);
  };

  return { activeItem, menuItems, handleItemClick };
};

export default useNavigation;
