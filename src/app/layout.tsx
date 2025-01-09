import { IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";
import React from "react";

const ibmPlexSansKr = IBM_Plex_Sans_KR({
  weight: "400",
  subsets: ["latin"],
});

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0"
        />
      </head>
      <body className={ibmPlexSansKr.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
