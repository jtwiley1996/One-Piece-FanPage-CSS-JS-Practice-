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
      <body>
        <header className="relative justify-between flex px-6 py-4 text-dark-red bg-cover bg-center shadow-lg">
          {/* Background Image with Opacity */}
          <div className="absolute inset-0 bg-cover bg-center opacity-75 z-0" style={{ backgroundImage: "url('/images/straw-hat-yellow.jpg')" }}></div>

          {/* Content */}
          <nav className="relative z-10">
            <a href="/" className="text-4xl hover-underline">
              Straw Hat Grand Fleet
            </a>
          </nav>

          <nav className="relative z-10">
            <a href="/about" className="text-2xl hover-underline">
              Learn More
            </a>
          </nav>
        </header>
        <main className="text-white">{children}</main>
        <footer className="relative justify-center flex px-6 py-4 text-dark-red bg-cover bg-center shadow-lg">
        <div className="absolute inset-0 bg-cover bg-center opacity-75 z-0" style={{ backgroundImage: "url('/images/straw-hat-yellow.jpg')" }}></div>
          <h2 className="z-10 text-lg">Welcome to the grand fleet</h2>
        </footer>
      </body>
    </html>
  );
}
