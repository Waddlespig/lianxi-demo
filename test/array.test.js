const {
  permutation_combination,
  gcd
} = require('../code/array');

test('permutation_combination: 23', () => {
  permutation_combination("23");
  expect(permutation_combination("23")).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
})
