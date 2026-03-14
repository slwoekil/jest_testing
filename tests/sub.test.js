const sub = require('../app/sub.js')

test('2 - 1 = 1', () => {
    expect(sub(2, 1)).toBe(1);
});

test('0 - 0 = 0', () => {
    expect(sub(0, 0)).toBe(0);
});

test('-4 - 3 = -7', () => {
    expect(sub(-4, 3)).toBe(-7);
});