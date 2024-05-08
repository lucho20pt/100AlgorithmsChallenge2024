export function avoidObstacles(inputArray: number[]): number {
  const arr = inputArray.sort((a, b) => a - b)
  let jump = 1
  let counter = 0

  while (true) {
    let path = counter * jump
    let jumpIsNotClear = arr.every((el) => el !== path)

    if (!jumpIsNotClear) {
      // if jump not clear try next jump++ and repeat
      counter = 0
      jump++
    } else {
      counter++
    }

    if (counter > arr.length) {
      break
    }
  }

  return jump
}

console.log(avoidObstacles([5, 3, 6, 7, 9]))
console.log(avoidObstacles([5, 3, 6, 7, 9, 20]))
console.log(avoidObstacles([1, 2, 3, 4, 5, 6, 7, 8]))

// with for loop
// export function avoidObstacles(inputArray: number[]): number {
//   const arr = inputArray.sort((a, b) => a - b)
//   let jump = 1
//   let loops = 0

//   for (let i = 0; i < arr.length; i++) {
//     let path = i * jump
//     path
//     let jumpIsNotClear = arr.every((el) => el !== path)

//     if (!jumpIsNotClear) {
//       // if jump not clear try next jump++ and repeat
//       i = 0
//       jump++
//     }
//     loops++
//   }
//   console.log(loops)
//   return jump
// }
