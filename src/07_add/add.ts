export function add(param1: number, param2: number): number {
  return param1 + param2
}

export function addAllNum(...params: number[]): number {
  let sum: number = 0
  params.forEach((el) => {
    sum += el
  })
  return sum
}

console.log(add(1, 2))
console.log(add(3, 2))

console.log(addAllNum(1, 2, 4))
console.log(addAllNum(3, 2))
