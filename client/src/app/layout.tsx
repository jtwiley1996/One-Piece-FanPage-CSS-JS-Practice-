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
            <a href="/about" className="text-xl hover-underline">
              Learn More
            </a>
          </nav>
        </header>

        <div className="flex">
          {/* Main Content */}
          <main className="flex-grow p-6 text-white">
            {children}
          </main>

          {/* Sidebar */}
          <aside className="w-1/5 bg-blue-800 bg-opacity-50 bl-2 mt-[4.3rem] mb-[4.3rem] rounded-tl-3xl rounded-bl-3xl border-white border-2 text-white p-4">
            {/* Account Information */}
            <div className="mb-8">
              <img
                src="/images/account-placeholder.png"
                alt="Account"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <p className="text-center">Username</p>
              <p className="text-center text-sm">Member since: Month Year</p>
            </div>

            {/* Wiki Links */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Wikis</h3>
              <ul>
                <li className="mb-2">
                  <a href="/wiki/one-piece" className="hover:underline">One Piece Wiki</a>
                </li>
                <li className="mb-2">
                  <a href="/wiki/straw-hats" className="hover:underline">Straw Hat Pirates</a>
                </li>
                <li className="mb-2">
                  <a href="/wiki/grand-line" className="hover:underline">Grand Line</a>
                </li>
              </ul>
            </div>

            {/* Recent Posts or Popular Threads */}
            <div>
              <h3 className="text-lg font-bold mb-4">Popular Threads</h3>
              <ul>
                <li className="mb-2">
                  <a href="/forum/thread/1" className="hover:underline">Epic Theories</a>
                </li>
                <li className="mb-2">
                  <a href="/forum/thread/2" className="hover:underline">Character Discussions</a>
                </li>
                <li className="mb-2">
                  <a href="/forum/thread/3" className="hover:underline">Latest Manga Chapter</a>
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
