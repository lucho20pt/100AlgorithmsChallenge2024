export function electionsWinners(votes: number[], k: number): number | string {
  votes.sort((a, b) => b - a)

  // find current max candidate
  const maxVote = Math.max(...votes)
  maxVote

  // how many are draw
  const maxVoteCount = votes.filter((vote) => vote === maxVote).length
  maxVoteCount

  // how many can win
  const possibleWinners = votes.filter((vote) => vote + k > maxVote).length
  possibleWinners

  // is there a winner ?
  if ((maxVoteCount === 1 && possibleWinners === 0) || possibleWinners === 1) {
    // return winner
    return 1
  } else if (possibleWinners > 1) {
    // return multiple possible winners
    return possibleWinners
  } else {
    // no winner
    return 0
  }
}

console.log(electionsWinners([2, 3, 5, 2], 3))
