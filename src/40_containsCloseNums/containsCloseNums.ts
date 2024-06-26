/* O(n*k) */
export function containsCloseNums(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k; j++) {
      if (nums[i] === nums[j]) {
        return true
      }
    }
  }
  return false
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3))
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2))

console.log(containsCloseNums([1, 2, 3, 1], 3))
console.log(containsCloseNums([1, 2, 3, 1, 2, 3], 2))

// /* O(n^2) */
// export function containsCloseNums(nums: number[], k: number): boolean {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i != j) {
//         if (nums[i] === nums[j]) {
//           if (Math.abs(i - j) <= k) {
//             return true
//           }
//         }
//       }
//     }
//   }
//   return false
// }
