import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Home from "./Pages/Home";
import { Missions } from "./Pages/mission";
import Friends from "./Pages/Friends";
import Leaderboard from "./Pages/leaderboard";
import Wallet from "./Pages/Wallet";
import Home2 from "./Pages/Home2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/Home2",
    element: <Home2/>,
  },

  {
    path: "/Missions",
    element: <Missions/>,
  },

  {
    path: "/Friends",
    element: <Friends />,
  },

  {
    path: "/Leaderboard",
    element: <Leaderboard />,
  },

  {
    path: "/Wallet",
    element: <Wallet />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
