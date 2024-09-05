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
      <header className="justify-between flex px-6 py-4  border-b-2 border-green-800 text-green-800">
        <nav>
        <Link href="/" passHref legacyBehavior>
          <a className="text-4xl z-10 hover-underline">
            Straw Hat Grand Fleet
          </a>
        </Link>
        </nav>

        <nav>
          <h1 className="text-2xl">
            Learn More
          </h1>
        </nav>

        </header>
      <main className="bg-white">
      {children}
      </main>
      </body>
    </html>
  );
}