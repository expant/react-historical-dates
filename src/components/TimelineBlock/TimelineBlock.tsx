import { Title } from "../shared/Title/Title";
import { Circle } from "./Circle/Circle";
import { PeriodPointList } from "./PeriodPointList/PeriodPointList";
import "./TimelineBlock.scss";

export function TimelineBlock() {
  return (
    <div className="timeline-block">
      <Title>Исторические даты</Title>
      <Circle>
        <PeriodPointList />
      </Circle>
    </div>
  );
}
