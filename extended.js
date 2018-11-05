expect(body.data.message)
  .toMatch('Uncaught TypeError: Cannot read property ["email" is required]');

expect(body.data.message.slice(43, 60))
  .toMatch('"email" is required');

expect(body.data.message).toInclude('"email" is required');

it('add 1 and 1', () => {
  const actual = 1 + 1;
  expect(actual).toBe(2);
  expect(actual).toBeGreaterThan(1);
  expect(actual).toBeLessThan(3);
});

it('add 1 and 1', () => {
  expect(1 + 1)
    .toBe(2)
    .toBeGreaterThan(1)
    .toBeLessThan(3);
});
