export const calculatePointPosition = (
  index: number,
  totalPoints: number,
  radius: number,
  activeIndex: number = 0
) => {
  const { PI, cos, sin } = Math;
  const targetAngle = -PI / 4;
  const angleOffset = targetAngle - (activeIndex * 2 * PI) / totalPoints;
  const angle = (index * 2 * PI) / totalPoints + angleOffset;

  return {
    x: radius * cos(angle),
    y: radius * sin(angle),
  };
};
