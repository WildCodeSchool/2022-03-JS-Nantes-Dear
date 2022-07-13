import React from "react";
import { Outlet } from "react-router-dom";

export default function LayoutWebsite() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
