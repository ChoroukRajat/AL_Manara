import "./globals.css";
import type { Metadata } from "next";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata: Metadata = {
    title: "AL MANARA Website",
    description: "AI-Driven Equity in Moroccan Education",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            <link rel="shortcut icon" href="/logos/icone.png" type="image/png" />
        </head>
        <body className="font-custom">
        <ClientWrapper>
            <main>{children}</main>
        </ClientWrapper>
        </body>
        </html>
    );
}
