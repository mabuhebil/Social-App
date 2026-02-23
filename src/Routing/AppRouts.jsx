import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Notfound from "../pages/Notfound/Notfound";
import Profile from "../pages/Profile/Profile";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../pages/Aus/Login/Login";
import Register from "../pages/Aus/Register/Register";
import ProtectRouts from "./ProtectRouts";
import ProtectAuthRouts from "./ProtectAuthRouts";
import PostDetails from "../pages/PostDetails/PostDetails";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectRouts>
            <Home />
          </ProtectRouts>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectRouts>
            <Profile />
          </ProtectRouts>
        ),
      },
      {
        path: "post-details/:postId",
        element: (
          <ProtectRouts>
            <PostDetails />
          </ProtectRouts>
        ),
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },

  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: (
          <ProtectAuthRouts>
            <Login />
          </ProtectAuthRouts>
        ),
      },
      {
        path: "register",
        element: (
          <ProtectAuthRouts>
            <Register />
          </ProtectAuthRouts>
        ),
      },
    ],
  },
]);
