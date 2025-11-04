import React from "react";
import Link from "next/link";

type MenuItem = {
  id: string;
  icon?: React.ReactNode;
  label: string;
  path: string;
};

type KelasTemplateProps = {
  menuList?: MenuItem[];
  title?: string;
  id?: string;
  showSidebar?: boolean;
  children?: React.ReactNode;
};

const defaultMenu: MenuItem[] = [
  { id: "dashboard", label: "Dashboard", path: "/" },
  { id: "videos", label: "Video List", path: "/videos" },
  { id: "settings", label: "Settings", path: "/settings" },
];

const KelasTemplate = ({ menuList, title, showSidebar = true, children }: KelasTemplateProps) => {
  const menu = menuList ?? defaultMenu;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {showSidebar && (
        <aside style={{ width: 240, background: "#0b1220", color: "#e6eef8", padding: "1rem" }}>
          <h3 style={{ margin: 0, marginBottom: "1rem" }}>{title ?? "Dashboard"}</h3>
          <nav>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {menu.map((m) => (
                <li key={m.id} style={{ marginBottom: "0.5rem" }}>
                  <Link href={m.path} style={{ color: "#cbd5e1", textDecoration: "none", display: "flex", gap: 8, alignItems: "center" }}>
                    {m.icon}
                    <span>{m.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
      <main style={{ flex: 1, padding: "1rem" }}>{children}</main>
    </div>
  );
};

export default KelasTemplate;