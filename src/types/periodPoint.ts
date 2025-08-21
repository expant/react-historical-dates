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
};
