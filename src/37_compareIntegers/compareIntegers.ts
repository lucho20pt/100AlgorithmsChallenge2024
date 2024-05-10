export function compareIntegers(a: string, b: string): string {
  const n1 = parseInt(a)
  const n2 = parseInt(b)

  if (n1 < n2) {
    return 'less'
  } else if (n1 > n2) {
    return 'greater'
  } else {
    return 'equal'
  }
}

console.log(compareIntegers('12', '13'))
console.log(compareIntegers('875', '799'))
console.log(compareIntegers('1000', '1000'))
