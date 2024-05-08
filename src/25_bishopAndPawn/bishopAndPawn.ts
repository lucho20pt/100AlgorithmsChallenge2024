interface Coords {
  x: number
  y: number
}
// coord parse fn
export const coords = function (param: string): Coords {
  const x = param.charCodeAt(0) - 'a'.charCodeAt(0)
  const y = parseInt(param[1]) - 1
  return { x, y }
}

export function bishopAndPawn(bishop: string, pawn: string): boolean {
  // given coords
  const bishopCoord = coords(bishop)
  const pawnCoord = coords(pawn)

  //   two points are on the same diagonal if the absolute difference between
  //   their x-coordinates is equal to the absolute difference between
  //   their y-coordinates

  return (
    Math.abs(bishopCoord.x - pawnCoord.x) ===
    Math.abs(bishopCoord.y - pawnCoord.y)
  )
}

console.log(bishopAndPawn('a1', 'c3'))
