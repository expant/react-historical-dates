import type { HistoricalEvent, TimePeriod } from "@/types/timeline";

export const timePeriods: TimePeriod[] = [
  {
    id: 1,
    startYear: 2015,
    endYear: 2022,
    title: "Наука",
  },
  {
    id: 2,
    startYear: 2017,
    endYear: 2018,
    title: "Технологии",
  },
  {
    id: 3,
    startYear: 2015,
    endYear: 2022,
    title: "Кино",
  },
  {
    id: 4,
    startYear: 2015,
    endYear: 2022,
    title: "Литература",
  },
  {
    id: 5,
    startYear: 2015,
    endYear: 2022,
    title: "",
  },
  {
    id: 6,
    startYear: 2015,
    endYear: 2022,
    title: "",
  },
];

export const historicalEvents: HistoricalEvent[] = [
  {
    id: 1,
    timePeriodId: 1,
    date: "13 сентября 2015",
    title: "Частное солнечное затмение",
    description: "Видимое в Южной Африке и части Антарктиды",
  },
  {
    id: 2,
    timePeriodId: 1,
    date: "2016",
    title: "Открытие галактики GN-z11",
    description:
      "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик",
  },
  {
    id: 3,
    timePeriodId: 2,
    date: "2017",
    title: "Tesla Semi",
    description:
      "Компания Tesla официально представила первый в мире электрический грузовик",
  },
];
