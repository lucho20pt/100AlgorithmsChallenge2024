export function confirmEnding(str: string, target: string): boolean {
  let res: string = str.substring(str.length - target.length)
  return res === target
}

console.log(confirmEnding('Abstraction', 'action'))
console.log(confirmEnding('Open sesame', 'pen'))
