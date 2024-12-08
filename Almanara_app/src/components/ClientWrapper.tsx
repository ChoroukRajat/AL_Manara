"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { Navbar, Footer } from "@/components";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <Navbar />
            {children}
            <Footer />
        </SessionProvider>
    );
}
