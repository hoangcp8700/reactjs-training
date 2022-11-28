import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <header>header</header>
    <main>{children}</main>
    <footer>
      <div style={{ height: 300, background: "blue" }}>footer</div>
    </footer>
  </>
);

export default Layout;
