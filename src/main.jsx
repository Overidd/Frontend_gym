import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutLanding from "./layout/LayoutLanding";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import PageLocales from "./pages/location/PageLocales";
import PageLocalDetail from "./pages/locationDetail/PageLocalDetail";
import Memberships from "./pages/membership/Memberships";
import Landing from "./pages/home/Landing";

import "./animation.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutLanding />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/planes",
        element: <Memberships />,
      },
      {
        path: "/locales",
        element: <PageLocales />,
      },
      {
        path: "/locales/:id",
        element: <PageLocalDetail />,
      }
    ],
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);