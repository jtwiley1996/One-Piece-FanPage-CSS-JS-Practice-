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
        <header className="relative justify-between flex pr-6 py-4 text-dark-red bg-cover bg-center shadow-lg">
          {/* Background Image with Opacity */}
          <div className="absolute inset-0 bg-cover bg-center opacity-75 z-0" style={{ backgroundImage: "url('/images/straw-hat-yellow.jpg')" }}></div>

          {/* Content */}
          <nav className="relative z-10">
            <a href="/" className="text-4xl compressed-text hover-underline">
              Straw Hat Grand Fleet
            </a>
          </nav>

          <nav className="relative z-10 mt-2">
            <a href="/about" className="text-lg mt-1 hover-underline">
              Learn More
            </a>
            <a href="/signin" className="text-md hover-underline ml-2 border border-dark-red bg-cream rounded-3xl p-2">
              Sign In
            </a>
          </nav>
        </header>

        <div className="flex">
          {/* Main Content */}
          <main className="flex-grow p-6 text-white">
            {children}
          </main>

          {/* Sidebar */}
          <aside className="w-1/5 bg-blue-800 bg-opacity-50 bl-2 mt-[2.5rem] mb-[2.5rem] border-white border-2 text-white p-4">
            {/* New Post Button */}
            <div className="mb-8">
              <a href="/new-post" className="block text-lg font-bold mb-4 text-center bg-dark-red hover:bg-red-700 py-2 rounded border border-white">Make a New Post</a>
            </div>

            {/* Staff Online */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Staff Online</h3>
              <ul>
                <li className="mb-2">Julian</li>
              </ul>
            </div>

            {/* Latest Posts */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Latest Posts</h3>
              <ul>
                <li className="mb-2">
                  <a href="/forum/thread/1" className="hover:underline">Spoiler One Piece Chapter 1126 Spoilers Discussion</a>
                  <p className="text-sm">Latest: Tyki_Mikk Yesterday at 8:18 PM</p>
                </li>
                <li className="mb-2">
                  <a href="/forum/thread/2" className="hover:underline">General & Others Bounty Discussion and Speculation</a>
                  <p className="text-sm">Latest: shadow31 Yesterday at 8:03 PM</p>
                </li>
                <li className="mb-2">
                  <a href="/forum/thread/3" className="hover:underline">Role Madness Star Wars OT Trilogy</a>
                  <p className="text-sm">Latest: Dr. Watson Yesterday at 8:02 PM</p>
                </li>
              </ul>
            </div>

            {/* Latest Profile Posts */}
            <div>
              <h3 className="text-lg font-bold mb-4">Latest Profile Posts</h3>
              <ul>
                <li className="mb-2">
                  <a href="/profile/BangOO" className="hover:underline">Natalija wrote on BangOO🍅's profile: Bongo, did you see Baekhyun *_*</a>
                  <p className="text-sm">Yesterday at 7:50 PM</p>
                </li>
                <li className="mb-2">
                  <a href="/profile/KING_HARASHIMA" className="hover:underline">AverageNamiEnjoyer wrote on K!NG HARA$H!MA's profile: Stupid</a>
                  <p className="text-sm">Yesterday at 7:15 PM</p>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <footer className="relative justify-center flex px-6 py-4 text-dark-red bg-cover bg-center shadow-lg">
          <div className="absolute inset-0 bg-cover bg-center opacity-75 z-0" style={{ backgroundImage: "url('/images/straw-hat-yellow.jpg')" }}></div>
          <h2 className="z-10 text-lg">Welcome to the grand fleet</h2>
        </footer>
      </body>
    </html>
  );
}
