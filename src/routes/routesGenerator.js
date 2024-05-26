import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import * as Pages from "./page";
import routesUrl from "./routesUrl";

import { Dashboard } from "../views/Dashboard";
import {Profile} from "../views/Profile";
import {Header}  from "../components/header/Header";
import { MyOrders } from "../components/profile/orders/MyOrders";
import { Comment } from "../components/profile/Activities/Comment";
import { GiftCard } from "../components/profile/Activities/GiftCard";
import { Messages } from "../components/profile/Activities/Messages";
import { ProfileMe } from "../components/profile/Activities/ProfileMe";
import { RecentVisits } from "../components/profile/Activities/RecentVisits";
import { ExitProfile } from "../components/profile/Activities/ExitProfile";


function RoutesGenerator() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main">
      <Suspense fallback={<></>}>
        <Routes>
          <Route path={routesUrl.dashboard} element={<Dashboard />} />
            <Route path={routesUrl.profile} element={<Profile />}>
              <Route path={routesUrl.profileComment} element={<Comment />} />
              <Route path={routesUrl.profileMyOrders} element={<MyOrders />} />
              <Route path={routesUrl.profileExitProfile} element={<ExitProfile />} />
              <Route path={routesUrl.profileGiftCard} element={<GiftCard/>} />
              <Route path={routesUrl.profileMessages} element={<Messages/>} />
              <Route path={routesUrl.profileProfileMe} element={<ProfileMe/>} />
              <Route path={routesUrl.profileRecentVisits} element={<RecentVisits/>} />
            </Route>
          <Route path="*" element={<Navigate to={routesUrl.dashboard}  />} />
        </Routes>
      </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default RoutesGenerator;
