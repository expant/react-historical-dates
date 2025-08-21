export type TimePeriod = {
  id: number;
  startYear: number;
  endYear: number;
  title: string;
};

export type HistoricalEvent = {
  id: number;
  timePeriodId: number;
  date: string;
  title: string;
  description: string;
};
