import React from "react";
import { Routes, Route } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import JobBarMainPage from "./../JobBar/JobBarMainPage";
import JobDetail from "./../JobDetail/JobDetail";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <JobBarMainPage />,
  },
  {
    /*} {
    path: "/",
    element: <JobDetail />,
    }, */
  },
]);
