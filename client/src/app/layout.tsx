"use client";

import "../styling/globals.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-dark-red">
        <header
          className="justify-between flex px-6 py-4 text-dark-red bg-cover bg-center shadow-lg"
          style={{ backgroundImage: "url('/images/straw-hat-yellow.jpg')" }}
        >
          <nav>
            <a href="/" className="text-4xl z-10 hover-underline">
              Straw Hat Grand Fleet
            </a>
          </nav>

          <nav>
            <a href="/about" className="text-2xl z-10 hover-underline">
              Learn More
            </a>
          </nav>
        </header>
        <main className="text-white">{children}</main>
        <footer className="justify-center flex px-6 py-4 border-t-2 border-green-800 text-green-800">
          <h2>Welcome to the grand fleet</h2>
        </footer>
      </body>
    </html>
  );
}
