import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
}
