
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Home from "../pages/Home.jsx";
import { Login } from "../pages/Login.jsx";
// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // loader: rootLoader,
    },
    {
      path: "login/",
      element: <Login />,
      // loader: teamLoader,
    },
  ]);
  