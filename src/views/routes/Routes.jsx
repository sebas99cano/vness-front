import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Login = lazy(() => import("../auth/components/Login"));
const Home = lazy(() => import("../home/Home"));
const NotFoundPage = lazy(() => import("../layout/NotFoundPage"));

export const PrivateRoute = ({ children }) => {
  const sessionInfo = JSON.parse(sessionStorage.getItem("storage"));
  return sessionInfo ? children : <Navigate to={"/"} />;
};
export const PublicRoute = ({ children }) => {
  const sessionInfo = JSON.parse(sessionStorage.getItem("storage"));
  return sessionInfo ? <Navigate to={"/home"} /> : children;
};

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path={"/account"}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path={"/"}
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AllRoutes;
