const {add, subtract, multiply, divide} = require('../lib/operations')


  test('adds 1 + 2  to equal to 3 ', () => {
    expect(add(1, 2)).toBe(3)
  });



  test('subtract 4 - 2 expects to equal 2', () => {
    expect(subtract(4, 2 )).toBe(2)
  })
  
  test('multiply 3 * 2 expects to equal 6', () => {
    expect(multiply(3, 2 )).toBe(6)
  })
  

  test('divide 8 / 2 expects to equal 4', () => {
    expect(divide(8, 2 )).toBe(4)
  })
  