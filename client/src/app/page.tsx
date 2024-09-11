"use client";

import "../styling/globals.css";
import React, { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState('forum');

  const renderContent = () => {
    switch (activeTab) {
      case 'forum':
        return <div>Forum content here</div>;
      case 'members':
        return <div>Members content here</div>;
      case 'whatsNew':
        return <div>What's New content here</div>;
      case 'faq':
        return (
          <div>
            <h2>Manga Chapters</h2>
            <p>Content about manga chapters here</p>
            <h2>Theories</h2>
            <p>Content about theories here</p>
            <h2>Events</h2>
            <p>Content about events here</p>
          </div>
        );
      default:
        return <div>Welcome to the ultimate One Piece manga discussion forum!</div>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Tabs */}
      <nav className="flex border-b border-gray-300 bg-gray-100">
        <button
          onClick={() => setActiveTab('forum')}
          className={`py-2 px-4 ${activeTab === 'forum' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
        >
          Forum
        </button>
        <button
          onClick={() => setActiveTab('members')}
          className={`py-2 px-4 ${activeTab === 'members' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
        >
          Members
        </button>
        <button
          onClick={() => setActiveTab('whatsNew')}
          className={`py-2 px-4 ${activeTab === 'whatsNew' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
        >
          What's New
        </button>
        <button
          onClick={() => setActiveTab('faq')}
          className={`py-2 px-4 ${activeTab === 'faq' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
        >
          FAQ
        </button>
      </nav>

      {/* Tab Content */}
      <main className="flex-grow p-6 text-white bg-blue-800 bg-opacity-50 border-white border-2 mt-4">
        {renderContent()}
      </main>
    </div>
  );
}
