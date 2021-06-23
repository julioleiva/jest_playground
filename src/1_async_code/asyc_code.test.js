import '@babel/polyfill';
import { promise } from './promise';
import { person } from './mocks';

test('async test with promises', () => {
  return promise.then((value) => {
    expect(value).toEqual(person);
  });
});

test('async test with async_await', async () => {
  const data = await promise;
  expect(data).toEqual(person);
});

// async_await
