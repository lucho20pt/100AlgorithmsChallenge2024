export function flattenArray(arr: any[]): any[] {
  // base case
  if (!Array.isArray(arr)) return [arr]

  // recursive
  let result: any = []
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    // result = result.concat(flattenArray(element))
    result = [...result, ...flattenArray(element)]
  }

  return result
}

console.log(flattenArray([[['a']], [['b']]]))
console.log(flattenArray([1, [2], [3, [[4]]]]))
