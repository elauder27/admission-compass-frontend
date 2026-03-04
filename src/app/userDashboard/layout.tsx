"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./dashboard.module.css";
import { DashboardHome } from "./page"; // your main dashboard content

export default function DashboardLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mock nav items
  const navItems = [
    { icon: "🏠", label: "Dashboard", path: "/dashboard" },
    { icon: "✨", label: "New Prediction", path: "/dashboard/new-prediction" },
    { icon: "📜", label: "My Predictions", path: "/dashboard/predictions" },
    { icon: "💰", label: "Token Wallet", path: "/dashboard/tokens" },
    { icon: "📚", label: "Past Questions", path: "/dashboard/past-questions" },
    { icon: "💡", label: "Recommendations", path: "/dashboard/recommendations" },
    { icon: "👤", label: "Profile", path: "/dashboard/profile" },
    { icon: "❓", label: "Support", path: "/dashboard/support" }
  ];

  return (
    <div className={styles.dashboardWrapper}>
      {/* Top Bar */}
      <header className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.logoSection}>
            <button
              className={styles.mobileMenuButton}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "❌" : "☰"}
            </button>
            <Link href="/dashboard" className={styles.logo}>
              <span>Admission Compass</span>
            </Link>
          </div>

          <div className={styles.topBarRight}>
            <span className={styles.tokenBalance}>100 Tokens</span>
            <button className={styles.notifications}>🔔</button>
            <Link href="/dashboard/profile">
              <span className={styles.avatar}>U</span>
            </Link>
          </div>
        </div>
      </header>

      <div className={styles.contentWrapper}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <nav>
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className={styles.navItem}>
                <span className={styles.navIcon}>{item.icon}</span>
                <span className={styles.navLabel}>{item.label}</span>
              </Link>
            ))}
            <button className={styles.logoutButton}>Logout</button>
          </nav>
        </aside>

        {/* Mobile Sidebar */}
        {mobileMenuOpen && (
          <div
            className={styles.mobileSidebarBackdrop}
            onClick={() => setMobileMenuOpen(false)}
          >
            <aside
              className={styles.mobileSidebar}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.mobileSidebarHeader}>
                <span>Menu</span>
                <button onClick={() => setMobileMenuOpen(false)}>❌</button>
              </div>
              <nav>
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={styles.navItem}
                  >
                    <span className={styles.navIcon}>{item.icon}</span>
                    <span className={styles.navLabel}>{item.label}</span>
                  </Link>
                ))}
                <button className={styles.logoutButton}>Logout</button>
              </nav>
            </aside>
          </div>
        )}

        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* This replaces <Outlet /> from React Router */}
          <DashboardHome />
        </main>
      </div>
    </div>
  );
}
