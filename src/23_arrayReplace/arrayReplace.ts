export function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  const arr: number[] = []
  inputArray
  for (let i = 0; i < inputArray.length; i++) {
    let el = inputArray[i]
    el

    el === elemToReplace
      ? arr.push((inputArray[i] = substitutionElem))
      : arr.push(inputArray[i])
  }
  
  return arr
}

console.log(arrayReplace([1, 2, 1], 1, 3))
