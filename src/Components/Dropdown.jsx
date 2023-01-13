import React, { useState,createContext } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

export const UserContext = createContext()
function Dropdown() {
    const serviceDropdown = [
        {
          id: 1,
          title: "Northindian",
          path: "/Cuisine",
          cName: "submenu-item",
        },
        {
          id: 2,
          title: "South Indian",
          path: "/Cuisine",
          cName: "submenu-item",
        },
        {
          id: 3,
          title: "Chineese",
          path: "/Cuisine",
          cName: "submenu-item",
        },
        {
          id: 4,
          title: "Fast food",
          path: "/Cuisine",
          cName: "submenu-item",
        },
      ];
  const [dropdown, setDropdown] = useState(false);
  function sendelement(x){
    setDropdown(false)
    return(<UserContext.Provider value={x}>
      </UserContext.Provider>)
  }
 

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            
              <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => sendelement(item.title)}
              >
                {item.title}
              </Link>
            </li>
            
            
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
