import { ReactNode } from "react";
import "./MainLayout.scss";

export function MainLayout({ children }: { children: ReactNode }) {
  return <div className="main-layout">{children}</div>;
}
