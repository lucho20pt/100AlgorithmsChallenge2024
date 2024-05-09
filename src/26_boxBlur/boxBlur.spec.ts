import { boxBlur } from './boxBlur'

describe(boxBlur.name, () => {
  it('Test 1', () => {
    // arrange
    const data = [
      [1, 1, 1],
      [1, 7, 1],
      [1, 1, 1]
    ]

    // act
    const response = boxBlur(data)

    // assert
    expect(response).toEqual([[1]])
  })
  it('Test 2', () => {
    // arrange
    const data = [
      [7, 4, 0, 1],
      [5, 6, 2, 2],
      [6, 10, 7, 8],
      [1, 4, 2, 0]
    ]

    // act
    const response = boxBlur(data)

    // assert
    expect(response).toEqual([
      [5, 4],
      [4, 4]
    ])
  })
})
