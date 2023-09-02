import { Navigate, RouteObject } from "react-router";
import App from "../../components/App/App";
import HomePage from "../../pages/HomePage/HomePage";
import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage";
import { createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "/home", element: <HomePage /> },
      { path: "/favorites", element: <FavoritesPage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
