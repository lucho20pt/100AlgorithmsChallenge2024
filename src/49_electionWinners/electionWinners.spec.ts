import { electionsWinners } from './electionWinners'

xdescribe(electionsWinners.name, () => {
  it('Test 1', () => {
    // arrange
    const votes = [2, 3, 5, 2]
    const k = 3

    // act
    const response = electionsWinners(votes, k)

    // assert
    expect(response).toBe(2)
  })

  it('Test 2', () => {
    // arrange
    const votes = [2, 3, 9, 2]
    const k = 3

    // act
    const response = electionsWinners(votes, k)

    // assert
    expect(response).toBe(1)
  })

  it('Test 3', () => {
    // arrange
    const votes = [2, 3, 3, 2]
    const k = 3

    // act
    const response = electionsWinners(votes, k)

    // assert
    expect(response).toBe(4)
  })
})
