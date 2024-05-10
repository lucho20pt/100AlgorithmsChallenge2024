export function companyBotStrategy(trainingData: number[][]): number {
  let counter: number = 0
  let points: number = 0

  for (let trainer of trainingData) {
    let answerTime = trainer[0]
    let correctness = trainer[1]
    if (correctness === 1) {
      points += answerTime
      counter++
    }
  }

  const result: number = points / counter

  return result || 0
}

console.log( companyBotStrategy([ [3, 1], [6, 1], [4, 1], [5, 1] ]) )
console.log( companyBotStrategy([ [4, 1], [4, -1], [0, 0], [6, 1] ]) )
console.log( companyBotStrategy([ [4, -1], [0, 0], [5, -1] ]) )
