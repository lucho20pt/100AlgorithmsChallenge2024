export function addTwoDigits(n: number): number {
  const strArr = n.toString().split('')
  //   console.log(strArr)
  const initialValue = 0
  const sum = strArr.reduce(
    (acc, curr) => Number(acc) + Number(curr),
    initialValue
  )
  //   console.log(sum)
  return sum
}

console.log(addTwoDigits(29))
