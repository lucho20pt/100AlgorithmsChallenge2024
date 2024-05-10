export function composeRanges(nums: number[]): string[] {
  const arr: string[] = []
  let temp: number[] = []

  for (let i = 0; i < nums.length; i++) {
    let el = nums[i]
    let prev = nums[i - 1]
    let next = nums[i + 1]

    // get single
    if (prev + 1 !== el && next - 1 !== el) {
      temp.push(el)
      let srt = `${temp[0]}`
      arr.push(srt)
      temp = []
    }

    // get range
    if (prev + 1 === el || next - 1 === el) {
      temp.push(el)
      if (el + 1 !== next) {
        let srt = `${temp[0]}->${temp[temp.length - 1]}`
        arr.push(srt)
        temp = []
      }
    }
  }

  return arr
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]))
