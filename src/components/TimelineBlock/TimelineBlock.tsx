import { Title } from "../shared/Title/Title";
import { Circle } from "./Circle/Circle";
import { PeriodPoint } from "./PeriodPoint/PeriodPoint";
import { timePeriods } from "../../data/timelineData";
import { calculatePointPosition } from "../../utils/calculatePointPosition";
import "./TimelineBlock.scss";
import { useState } from "react";

export function TimelineBlock() {
  const [currentPeriodId, setCurrentPeriodId] = useState(6);

  return (
    <div className="timeline-block">
      <Title>Исторические даты</Title>
      <Circle>
        {timePeriods.map((period, index) => {
          const position = calculatePointPosition(
            index,
            timePeriods.length,
            265
          );

          return (
            <PeriodPoint
              position={position}
              period={period}
              isCurrent={currentPeriodId === period.id}
            />
          );
        })}
      </Circle>
    </div>
  );
}
