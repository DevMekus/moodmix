"use client";
import React from "react";
import SecureTop from "@/components/SecureTop";
import Sidebar from "@/components/Sidebar";
import { dashUrl } from "@/lib/navigations";
import { useEffect, useState } from "react";

const layout = ({ children }) => {
  return (
    <>
      <SecureTop />
      <main className="main-container">
        <Sidebar links={dashUrl} />
        <div className="app-inner-flex">{children}</div>
      </main>
    </>
  );
};

export default layout;
