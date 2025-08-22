import type { PeriodPointTooltipProps } from "../../../types/periodPoint";
import "./PeriodPointTooltip.scss";

export function PeriodPointTooltip({
  period,
  isCurrent,
}: PeriodPointTooltipProps) {
  const { id, title } = period;

  return (
    <div className={`point-tooltip ${isCurrent ? "current" : ""}`}>
      <div className="point-tooltip-circle">{id}</div>
      <span className="point-tooltip-title">{title}</span>
    </div>
  );
}
