"use client"

import Link from "next/link";
import "../styling/globals.css"
import React from "react";

export default function RootLayout ({
  children,
}: Readonly <{
    children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <header className="justify-between flex p-4">
          <h1 className="text-4xl">
            Straw Hat Grand Fleet
          </h1>
          <h1 className="text-2xl">
            Learn More
          </h1>

        </header>
      <main className="bg-white">
      {children}
      </main>
      </body>
    </html>
  );
}