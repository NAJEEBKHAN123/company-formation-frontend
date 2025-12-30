import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      {/* Navbar is now included in each page individually */}
      <main>
        {children}
      </main>
    </div>
  );
}