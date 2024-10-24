import React from "react";

/* Authentication Components */
import Login from "../pages/Authentication/Login";
import Signup from "../pages/Authentication/Signup";

import { Routes } from "../enums/Routes.enum";

export const publicRoutes = [
  {
    path: Routes.LOGIN,
    cmp: <Login />,
  },
  {
    path: Routes.SIGNUP,
    cmp: <Signup />,
  },
];
