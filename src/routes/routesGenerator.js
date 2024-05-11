import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import * as Pages from "./page";
import routesUrl from "./routesUrl";

import { Dashboard } from "../views/Dashboard";
import {Profile} from "../views/Profile";
import {Header}  from "../components/header/Header";

function RoutesGenerator() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main">
      <Suspense fallback={<></>}>
        <Routes>
          <Route path={routesUrl.dashboard} element={<Dashboard />} />
          <Route path={routesUrl.profile} element={<Profile />} />
          <Route path="*" element={<Navigate to={routesUrl.dashboard} />} />
        </Routes>
      </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default RoutesGenerator;
