export function isTandemRepeat(inputString: string): boolean {
  const length: number = Math.floor(inputString.length)
  const left: string = inputString.substring(0, length / 2)

  return left.concat(...left) === inputString ? true : false
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
