export function calculateTimeInArea(data) {
  // Destructure the area boundaries

  const xMin = 598
  const xMax = 1351
  const yMin = 161
  const yMax = 701
  // Initialize the total time spent in the area
  let totalTime = 0

  // Loop through each data point
  data.forEach((point) => {
    const { x, y, time } = point

    // Check if the point is within the rectangle area
    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
      totalTime += time
    }
  })

  return totalTime
}
