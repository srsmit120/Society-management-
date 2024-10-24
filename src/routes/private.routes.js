import React from "react";

/* Components */
import Dashboard from "../pages/Dashboard";

import { MdOutlineDashboard } from "react-icons/md";

import { RouteNames, Routes } from "../enums/Routes.enum";
import ResidentialManagement from "../pages/ResidentialManagement";

export const privateRoutes = [
  {
    path: Routes.DASHBOARD,
    label: RouteNames.DASHBOARD,
    cmp: <Dashboard />,
    icon: <MdOutlineDashboard />,
  },
  {
    path: Routes.RESIDENTIALMANAGEMENT,
    label: RouteNames.RESIDENTIALMANAGEMENT,
    cmp: <ResidentialManagement />,
    icon: <MdOutlineDashboard />,
  },
];
