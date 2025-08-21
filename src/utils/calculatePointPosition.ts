export const calculatePointPosition = (
  index: number,
  totalPoints: number,
  radius: number
) => {
  const { PI, cos, sin } = Math;
  const angle = (index * 2 * PI) / totalPoints;

  return {
    x: radius * cos(angle),
    y: radius * sin(angle),
  };
};
