import React from "react";
import Router from "../../routes/Router";
import Sidebar from "../Sidebar/Sidebarr";
import TopNav from "../TopNav/TopNav";
import { Route, Routes, useLocation } from "react-router-dom";
import Register from "../../pages/Register";
import Login from "../../pages/Login";

const Layout = ({ children }) => {
  const pageUrl = useLocation();
  console.log("My children", pageUrl)
  return (
    <>

      {
        pageUrl.pathname === "/login" ?

          <Login />
          : pageUrl.pathname === "/register" ?

              <Register />
            :
            <>
              <div className="layout">
                <Sidebar />
                <div className="main__layout">
                  <TopNav />

                  <div className="content">
                    <Router />
                  </div>
                </div>
              </div>
            </>
      }
    </>
  );
};

export default Layout;
