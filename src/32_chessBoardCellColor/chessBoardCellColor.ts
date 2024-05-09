export function chessBoardCellColor(cell1: string, cell2: string): boolean {
  // note:
  // (in previous algorithm i needed to find if they were in same diagonal
  // that i achieve with difference between the two coords.)
  // i'm thinking if A1 starts in index 0,0 coord
  // if both x & y === even numbers or both x & y === odd numbers
  // the cell will be black

  // ok first try to parse the letter and number to get the coords
  const getCoords = (value: string) => {
    //{x:0; y:0}
    const x = value.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)
    const y = parseInt(value.charAt(1)) - 1
    return { x, y }
  }

  // get cords & compare
  const a = getCoords(cell1)
  const b = getCoords(cell2)

  let isEvenOdd = (n: number) => {
    return n % 2 === 0
  }

  // check they are both pair or both even
  if (isEvenOdd(a.x) === isEvenOdd(a.y) && isEvenOdd(b.x) === isEvenOdd(b.y)) {
    // console.log('black')
    return true
  } else {
    // console.log('white')
    return false
  }
}

console.log(chessBoardCellColor('A1', 'F8'))
console.log(chessBoardCellColor('A1', 'C3'))
console.log(chessBoardCellColor('A1', 'H3'))
