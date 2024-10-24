import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { getLocalStorageItem } from "../utils/localStorage";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ScrollbarComponent from "../components/ScrollbarComponent";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const token = getLocalStorageItem("accessToken");

  // Check if the route is public
  const isPublicRoute = publicRoutes.some((route) => route.path === pathname);
  const isPrivateRoute = privateRoutes.some((route) => route.path === pathname);

  if (isPublicRoute) {
    return !token ? children : <Navigate to="/dashboard" />;
  }

  // Check if user is authenticated
  if (!token) {
    return <Navigate to="/login" />;
  }

  return pathname === "/" ? (
    <Navigate to="/dashboard" />
  ) : isPrivateRoute ? (
    <PrivateLayout component={children} />
  ) : (
    <Navigate to="/dashboard" />
  );
};

const PrivateLayout = ({ component }) => {
  return (
    <div className={`flex flex-col`}>
      <Navbar />
      <div
        className="flex"
        style={{
          height: "calc(100vh - 60px)",
        }}
      >
        <Sidebar />
        <ScrollbarComponent className="flex-1 overflow-auto">
          <div className="p-4 h-full">{component}</div>
        </ScrollbarComponent>
      </div>
    </div>
  );
};

export default Layout;
