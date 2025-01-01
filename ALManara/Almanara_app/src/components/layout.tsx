"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return <SessionProvider><ThemeProvider>{children}</ThemeProvider></SessionProvider>;
}

export default Layout;
