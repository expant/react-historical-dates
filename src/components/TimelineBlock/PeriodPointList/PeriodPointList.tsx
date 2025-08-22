import { useState } from "react";
import { PeriodPoint } from "../PeriodPoint/PeriodPoint";
import { PeriodPointTooltip } from "../PeriodPointTooltip/PeriodPointTooltip";
import { timePeriods } from "../../../data/timelineData";
import { calculatePointPosition } from "../../../utils/calculatePointPosition";
import "./PeriodPointList.scss";

export function PeriodPointList() {
  const [currentPeriodId, setCurrentPeriodId] = useState(6);

  const activeIndex = timePeriods.findIndex(
    (period) => period.id === currentPeriodId
  );

  return (
    <>
      {timePeriods.map((period, index) => {
        const position = calculatePointPosition(
          index,
          timePeriods.length,
          265,
          activeIndex
        );
        const isCurrent = currentPeriodId === period.id;

        return (
          <PeriodPoint
            key={period.id}
            position={position}
            isCurrent={isCurrent}
            onClick={() => setCurrentPeriodId(period.id)}
          >
            <PeriodPointTooltip period={period} isCurrent={isCurrent} />
          </PeriodPoint>
        );
      })}
    </>
  );
}
