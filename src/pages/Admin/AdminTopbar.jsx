import React, { useState } from "react";
import "./admintopbar.css";

const AdminTopbar = ({ onSidebarToggle }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="admin-topbar">
      <div className="admin-topbar-inner">
        {/* Left side */}
        <div className="topbar-left">
          <button className="topbar-menu-btn" onClick={onSidebarToggle} aria-label="Toggle menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></svg>
          </button>
          <div className="topbar-dropdown">
            <button className="topbar-dropdown-btn">
              Mega <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
          </div>
          <button className="topbar-icon-btn" aria-label="Fullscreen">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H5a2 2 0 00-2 2v3"/><path d="M21 8V5a2 2 0 00-2-2h-3"/><path d="M3 16v3a2 2 0 002 2h3"/><path d="M16 21h3a2 2 0 002-2v-3"/></svg>
          </button>
          <button className="topbar-icon-btn" onClick={() => setShowSearch(!showSearch)} aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </button>
        </div>

        {/* Right side */}
        <div className="topbar-right">
          {/* Language */}
          <button className="topbar-icon-btn lang-btn">
            <span className="flag-icon">🇬🇧</span>
          </button>

          {/* Notifications */}
          <button className="topbar-icon-btn notif-btn" aria-label="Notifications">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
            <span className="topbar-badge green">5</span>
          </button>

          {/* Messages */}
          <button className="topbar-icon-btn msg-btn" aria-label="Messages">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
            <span className="topbar-badge orange">3</span>
          </button>

          {/* User */}
          <div className="topbar-user">
            <div className="user-avatar">
              <img src="https://ui-avatars.com/api/?name=John+Doe&background=eee&color=333&size=36" alt="John Doe" />
            </div>
            <span className="user-name">John Doe</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      {showSearch && (
        <div className="topbar-search-overlay">
          <input type="text" placeholder="Search..." autoFocus />
          <button onClick={() => setShowSearch(false)}>✕</button>
        </div>
      )}
    </header>
  );
};

export default AdminTopbar;
