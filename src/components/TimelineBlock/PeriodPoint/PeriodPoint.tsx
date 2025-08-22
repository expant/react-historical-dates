import { useState } from "react";
import type { PeriodPointProps } from "../../../types/periodPoint";
import "./PeriodPoint.scss";

export function PeriodPoint({
  position,
  isCurrent,
  children,
  onClick,
}: PeriodPointProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = position;

  const handleOnClick = () => {
    setIsHovered(false);
    onClick();
  };

  return (
    <div
      className="point"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
      onMouseEnter={() => (isCurrent ? null : setIsHovered(true))}
      onMouseLeave={() => (isCurrent ? null : setIsHovered(false))}
      onClick={handleOnClick}
    >
      {(isCurrent || isHovered) && children}
    </div>
  );
}
