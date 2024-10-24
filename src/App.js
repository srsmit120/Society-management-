import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Layout */
import Layout from "./Layout";

/* Routes */
import { privateRoutes, publicRoutes } from "./routes";

import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const routesArray = [...privateRoutes, ...publicRoutes];

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routesArray?.length &&
            routesArray.map(({ path, cmp }) => {
              return <Route key={path} path={path} element={cmp} />;
            })}
        </Routes>
      </Layout>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
