import { Title } from "../shared/Title/Title";
import { Circle } from "./Circle/Circle";
import "./TimelineBlock.scss";

export function TimelineBlock() {
  return (
    <div className="timeline-block">
      <Title>Исторические даты</Title>
      <Circle />
    </div>
  );
}
