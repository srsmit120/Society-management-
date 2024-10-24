import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import ScrollbarComponent from "../../components/ScrollbarComponent"; // Fixed spelling
import { privateRoutes } from "../../routes";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div
      className={`transition-width duration-300 overflow-hidden bg-white shadow-md h-full`}
    >
      <ScrollbarComponent>
        <ul className="space-y-2 p-4">
          {privateRoutes
            .filter((route) => route.label)
            .map((route) => (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  className={`flex items-center p-2 rounded-md transition-colors duration-200 ${
                    location.pathname.includes(route.path)
                      ? "bg-gray-200 text-black"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="sidebar-icon mr-3">{route.icon}</div>
                  <span className="sidebar-text">{route.label}</span>
                </NavLink>
              </li>
            ))}
        </ul>
      </ScrollbarComponent>
    </div>
  );
};

export default Sidebar;
