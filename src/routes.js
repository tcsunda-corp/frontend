import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Outlets from "views/admin/outlets";
import Profile from "views/admin/profile";
import Transactions from "views/admin/transactions";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";
import SignUp from "views/auth/SignUp";

// Icon Imports
import {
  MdHome,
  MdStorefront,
  MdReceiptLong,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Outlets",
    layout: "/admin",
    path: "outlets",
    icon: <MdStorefront className="h-6 w-6" />,
    component: <Outlets />,
  },
  {
    name: "Transactions",
    layout: "/admin",
    icon: <MdReceiptLong className="h-6 w-6" />,
    path: "transactions",
    component: <Transactions />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "sign-up",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignUp />,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
