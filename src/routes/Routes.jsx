import {createBrowserRouter, Navigate} from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Home/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import LoginLayout from "../layouts/LoginLayout";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Category />,
        loader: () =>
          fetch("https://news-dragon-server-zynscript.vercel.app/news"),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({params}) =>
          fetch(
            `https://news-dragon-server-zynscript.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
        loader: ({params}) =>
          fetch(
            `https://news-dragon-server-zynscript.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
