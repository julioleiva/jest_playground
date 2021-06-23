test("no hay I en Team", () => {
  expect("team").not.toMatch(/I/);
});

test('hay "stop" en Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
