export function depositProfit(
  deposit: number,
  rate: number,
  threshold: number
): number {
  let years = 0

  while (true) {
    const income = deposit * (rate / 100)
    if (deposit >= threshold) return years
    deposit += income
    years++
  }
}

console.log(depositProfit(100, 20, 170))
