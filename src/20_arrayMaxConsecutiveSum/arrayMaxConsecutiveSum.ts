export function arrayMaxConsecutiveSum(
  inputArray: number[],
  k: number
): number {
  let max: number = 0
  const sum = (...params: number[]) => {
    return params.reduce((a, b) => a + b, 0)
  }

  for (let i = 0; i < inputArray.length - 1; i++) {
    const temp = inputArray.slice(i, i + k)
    let res = sum(...temp)
    max < res ? (max = res) : res
  }

  return max
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2))
