"use client"


import "../styling/globals.css"
import React from "react";

export default function RootLayout ({
  children,
}: Readonly <{
    children: React.ReactNode;
}>) {
  return (
    <html>
      <main className="bg-white">
      {children}
      </main>
    </html>
  );
}