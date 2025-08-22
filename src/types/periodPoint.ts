import { ReactNode } from "react";

export type Period = {
  id: number;
  startYear: number;
  endYear: number;
  title: string;
};

export type PeriodPointProps = {
  position: { x: number; y: number };
  period: Period;
  isCurrent: Boolean;
  // children: ReactNode;
  onClick: () => void;
};

export type PeriodPointTooltipProps = {
  period: Period;
  isCurrent: Boolean;
};
