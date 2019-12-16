const {
  reverse_string,
  reverse_string_2,
  consecutive_string
} = require('../code/string');

test('reverse_string:let\'s go to home', () => {
  expect(reverse_string("hellow world")).toBe("wolleh dlrow");
})

test('reverse_string_2:let\'s go to home', () => {
  expect(reverse_string_2("hellow world")).toBe("wolleh dlrow");
})

test('consecutive_string: 00110011', () => {
  expect(consecutive_string("00110011")).toEqual(["0011", "01", "1100", "10", "0011", "01"]);
})
