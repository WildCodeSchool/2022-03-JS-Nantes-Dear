import React from "react";
import { Outlet } from "react-router-dom";
import HeaderHome from "../home/HeaderHome";
import FooterHome from "../home/FooterHome";

export default function LayoutWebsite() {
  return (
    <div>
      <div>
        <HeaderHome />
        <Outlet />
      </div>
      <FooterHome />
    </div>
  );
}
