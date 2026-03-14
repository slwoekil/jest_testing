const greaterThenZero = require('../app/greater-then-zero.js')

test('В массиве отрицательные и положительные числа', () => {
    expect(greaterThenZero([-11, -3, 1, 23])).toEqual([1, 23]);
})

test('В массиве только отрицательные числа', () => {
    expect(greaterThenZero([-11, -3, -1, -23])).toEqual([]);
})

test('В массиве только положительные числа', () => {
    expect(greaterThenZero([11, 3, 1, 23])).toEqual([11, 3, 1, 23]);
})

test('Массив с 0', () => {
    expect(greaterThenZero([0])).toEqual([]);
})


test('Пустой массив', () => {
    expect(greaterThenZero([])).toEqual([]);
})
