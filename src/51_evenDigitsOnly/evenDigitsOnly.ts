export function evenDigitsOnly(n: number): boolean {
  const arr = n.toString().split('')
  const res = arr.every((char) => {
    const isEven = parseInt(char) % 2 === 0
    return isEven
  })
  return res
}

console.log(evenDigitsOnly(248622))
console.log(evenDigitsOnly(642386))
