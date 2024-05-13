export function celsiusToFahrenheit(celsius: number): number {
  let fahrenheit = celsius * (9 / 5) + 32
  return fahrenheit
}

console.log(celsiusToFahrenheit(-30))
console.log(celsiusToFahrenheit(-10))
console.log(celsiusToFahrenheit(0))
