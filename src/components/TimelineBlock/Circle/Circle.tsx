import { ReactNode } from "react";
import "./Circle.scss";

export function Circle({ children }: { children: ReactNode }) {
  return <div className="circle">{children}</div>;
}
