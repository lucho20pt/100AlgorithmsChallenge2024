export function integerToStringOfFixedWidth(
  number: number,
  width: number
): string {
  let str = number.toString().slice(-width)
  if (str.length < width) {
    let calc = width - str.length
    str = '0'.repeat(calc).concat(str)
  }
  return str
}

console.log(integerToStringOfFixedWidth(1234, 2))
console.log(integerToStringOfFixedWidth(1234, 4))
console.log(integerToStringOfFixedWidth(1234, 5))
