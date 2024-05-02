import { add, addAllNum } from './add'

describe(add.name, () => {
  it('test 1', () => {
    // act
    const result = add(1, 2)

    // assert
    expect(result).toBe(3)
  })

  it('test 2', () => {
    // act
    const result = add(3, 2)

    // assert
    expect(result).toBe(5)
  })
})

describe(addAllNum.name, () => {
  it('test 1', () => {
    // act
    const result = add(1, 2)

    // assert
    expect(result).toBe(3)
  })

  it('test 2', () => {
    // act
    const result = add(3, 2)

    // assert
    expect(result).toBe(5)
  })
})
