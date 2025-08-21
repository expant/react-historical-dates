import { ReactNode } from "react";
import "./Title.scss";

export function Title({ children }: { children: ReactNode }) {
  return <h2 className="title">{children}</h2>;
}
