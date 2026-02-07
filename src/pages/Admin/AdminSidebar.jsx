import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./adminsidebar.css";
import logo from "/assets/images/logo3.png";

const AdminSidebar = ({ collapsed, onToggle, onItemClick }) => {
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className={`admin-sidebar${collapsed ? " collapsed" : ""}`}>
      {/* Brand / Logo - use site logo and header-style name/tagline */}
      <div className="sidebar-brand">
        <div className="logo-wrapper">
          <img src={logo} alt="logo" className="logo-img" />
          <div className="logo-text">
            <span className="brand-name">MASHALLAH</span>
            <span className="brand-tagline">Computer's and Photo Studio</span>
          </div>
        </div>
        <button className="sidebar-toggle-btn" onClick={onToggle} aria-label="Toggle sidebar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
      </div>

      <div className="sidebar-scroll">
        {/* GENERAL Section */}
        <div className="sidebar-section">
          <span className="section-label">GENERAL</span>
          <ul className="sidebar-menu">
            <li>
              <NavLink
                to="/admin/dashboard"
                end
                className={({ isActive }) => isActive ? "active" : ""}
                onClick={onItemClick}
              >
                <span className="menu-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                </span>
                <span className="menu-text">Dashboard</span>
                <span className="menu-badge">3</span>
              </NavLink>
            </li>
            <li>
              <button className="menu-btn" onClick={() => toggleMenu("templates")}>
                <span className="menu-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                </span>
                <span className="menu-text">Templates</span>
                <span className={`menu-arrow ${openMenus.templates ? "open" : ""}`}>›</span>
              </button>
            </li>
            <li>
              <button className="menu-btn" onClick={() => toggleMenu("layouts")}>
                <span className="menu-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 12h18"/></svg>
                </span>
                <span className="menu-text">Layouts</span>
                <span className={`menu-arrow ${openMenus.layouts ? "open" : ""}`}>›</span>
              </button>
            </li>
            <li>
              <a href="#starter" className="menu-link" onClick={onItemClick}>
                <span className="menu-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </span>
                <span className="menu-text">Starter kit</span>
                <span className="menu-tag new">New</span>
              </a>
            </li>
          </ul>
        </div>

        {/* APPS Section */}
        <div className="sidebar-section">
          <span className="section-label">APPS</span>
          <ul className="sidebar-menu">
            <li>
              <a href="#email" onClick={onItemClick}>
                <span className="menu-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
                </span>
                <span className="menu-text">Email Application</span>
              </a>
            </li>
            <li>
              <a href="#chat" onClick={onItemClick}>
                <span className="menu-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                </span>
                <span className="menu-text">Chat Application</span>
              </a>
            </li>
            <li>
              <a href="#todo" onClick={onItemClick}>
                <span className="menu-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                </span>
                <span className="menu-text">Todo Application</span>
              </a>
            </li>
            <li>
              <a href="#kanban" onClick={onItemClick}>
                <span className="menu-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 7v10"/><path d="M16 7v6"/></svg>
                </span>
                <span className="menu-text">Kanban Application</span>
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={onItemClick}>
                <span className="menu-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/></svg>
                </span>
                <span className="menu-text">Contacts</span>
              </a>
            </li>
            <li>
              <a href="#project" onClick={onItemClick}>
                <span className="menu-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
                </span>
                <span className="menu-text">Project Summary</span>
              </a>
            </li>
            <li>
              <button className="menu-btn" onClick={() => toggleMenu("invoice")}>
                <span className="menu-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h8"/></svg>
                </span>
                <span className="menu-text">Invoice</span>
                <span className={`menu-arrow ${openMenus.invoice ? "open" : ""}`}>›</span>
              </button>
            </li>
            <li>
              <button className="menu-btn" onClick={() => toggleMenu("calendar")}>
                <span className="menu-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>
                </span>
                <span className="menu-text">Calender</span>
                <span className={`menu-arrow ${openMenus.calendar ? "open" : ""}`}>›</span>
              </button>
            </li>
          </ul>
        </div>

        {/* PAGES Section */}
        <div className="sidebar-section">
          <span className="section-label">PAGES</span>
          <ul className="sidebar-menu">
            <li>
              <button className="menu-btn" onClick={() => toggleMenu("timelines")}>
                <span className="menu-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </span>
                <span className="menu-text">Timelines</span>
                <span className={`menu-arrow ${openMenus.timelines ? "open" : ""}`}>›</span>
              </button>
            </li>
            <li>
              <a href="#account" onClick={onItemClick}>
                <span className="menu-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
                </span>
                <span className="menu-text">Account setting</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
