describe.only('group tests together', () => {
  test('something', () => {
    expect(something).toBe(expected);
  });
 
  it.only('does something', () => {
    expect(something).toBe(expected);
  });
});
