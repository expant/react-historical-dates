import { useState } from "react";
import type { PeriodPointProps } from "../../../types/periodPoint";
import "./PeriodPoint.scss";

export function PeriodPoint({ position, period, isCurrent }: PeriodPointProps) {
  // const [isHovered, setIsHovered] = useState(false);
  const { x, y } = position;

  return (
    <div
      className="point"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      {isCurrent && (
        <div className="point-tooltip">
          <div className="point-tooltip-circle">{period.id}</div>
          <span className="point-tooltip-title">{period.title}</span>
        </div>
      )}
      {/* {isHovered && (
        <div className="point-tooltip">
          <div className="point-tooltip-circle">{period.id}</div>
        </div>
      )} */}
    </div>
  );
}
