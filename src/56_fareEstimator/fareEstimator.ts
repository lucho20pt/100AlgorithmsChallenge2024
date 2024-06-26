export function fareEstimator(
  ride_time: number,
  ride_distance: number,
  cost_per_minute: number[],
  cost_per_mile: number[]
): number[] {
  const carTypes: number = cost_per_minute.length
  const tempArr: string[] = []
  let result: number[] = []

  for (let i = 0; i < carTypes; i++) {
    const calc = (
      ride_time * cost_per_minute[i] +
      ride_distance * cost_per_mile[i]
    ).toFixed(1)
    tempArr.push(calc)
  }

  result = tempArr.map(Number)

  return result
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]))
