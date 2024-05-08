import { avoidObstacles } from './avoidObstacles'

describe(avoidObstacles.name, () => {
  it('Test 1', () => {
    // arrange
    const data = [5, 3, 6, 7, 9]

    // act
    const response = avoidObstacles(data)

    // assert
    expect(response).toBe(4)
  })
  it('Test 2', () => {
    // arrange
    const data = [5, 3, 6, 7, 9, 20]

    // act
    const response = avoidObstacles(data)

    // assert
    expect(response).toBe(8)
  })
  it('Test 3', () => {
    // arrange
    const data = [2, 3, 4, 5, 6, 7, 8]

    // act
    const response = avoidObstacles(data)

    // assert
    expect(response).toBe(9)
  })
})
