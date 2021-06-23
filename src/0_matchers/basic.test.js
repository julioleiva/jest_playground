import { add, unique, capitalize, chunk, palindrome } from '../index';

//Api completa de matchers que admite expect()
//https://jestjs.io/es-ES/docs/expect

test('should add t ', () => {
  expect(add(1, 2)).toBe(3);
});

// toBe utiliza Object.is para comprobar la igualdad exacta.
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#when_to_use_jsxrefobject.is_versus_triple_equals)
// Si quieres comprobar el valor de un objeto, utiliza toEqual en su lugar.
// toEqual verifica recursivamente cada campo de un objeto o un array.

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  data.three = 3;
  expect(data).toEqual({ one: 1, two: 2, three: 3 });
});

test('array assignment', () => {
  const data = [1, 2, 3, 4];
  data[4] = 5;
  data.push(6);
  expect(data).toEqual([1, 2, 3, 4, 5, 6]);
});

//También puedes comprobar lo contrario de que espera el matcher:
test('adding a positive number that is not 0', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// ----------function unique----------------------
test('should returns an array with no duplicates', () => {
  const expected = [1, 2, 3, 4];
  expect(unique(expected)).toEqual(expected);
});

test('should no returns an array with duplicates', () => {
  const noExpected = [1, 2, 3, 4, 4];
  expect(unique(noExpected)).not.toEqual(noExpected);
});

// ----------function unique suite----------------------
describe('unique function', () => {
  const noDuplicates = [1, 2, 3, 4];
  const duplicates = [1, 2, 3, 4, 4];

  it('should returns an array with no duplicates', () => {
    expect(unique(duplicates)).toEqual(noDuplicates);
  });

  it('should no returns an array with duplicates', () => {
    expect(unique(duplicates)).not.toEqual(duplicates);
  });
});

// ----------arraycontaining matcher-------------------
describe('arrayContaining', () => {
  const expected = ['Saitama', 'Luffy'];
  it('matches even if received contains additional elements', () => {
    expect(['Saitama', 'Luffy', 'Goku']).toEqual(
      expect.arrayContaining(expected)
    );
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Saitama', 'SpongeBob']).not.toEqual(
      expect.arrayContaining(expected)
    );
  });
});

// ----------function capitalize suite----------------------
describe('function capitalize', () => {
  it('Capitalize is a function', () => {
    expect(typeof capitalize).toEqual('function');
  });

  it('capitalizes the first letter of every word in a sentence', () => {
    expect(capitalize('i am your father')).toEqual('I Am Your Father');
  });
});

// ----------function capitalize suite----------------------
describe('function chunk', () => {
  test('function chunk exists', () => {
    expect(typeof chunk).toEqual('function');
  });

  test('chunk divides an array of 10 elements with chunk size 2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunked = chunk(arr, 2);

    expect(chunked).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ]);
  });

  it('chunk divides an array of 3 elements with chunk size 1', () => {
    const arr = [1, 2, 3];
    const chunked = chunk(arr, 1);

    expect(chunked).toEqual([[1], [2], [3]]);
  });

  it('chunk divides an array of 5 elements with chunk size 3', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = chunk(arr, 3);

    expect(chunked).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });

  it('chunk divides an array of 13 elements with chunk size 5', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const chunked = chunk(arr, 5);

    expect(chunked).toEqual([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13],
    ]);
  });
});

// ----------function palindrome suite----------------------
describe('function palindrome', () => {
  it('palindrome function is defined', () => {
    expect(typeof palindrome).toEqual('function');
  });

  it('"aba" is a palindrome', () => {
    expect(palindrome('aba')).toBeTruthy();
  });

  it('" aba" is not a palindrome', () => {
    expect(palindrome(' aba')).toBeFalsy();
  });

  it('"1000000001" a palindrome', () => {
    expect(palindrome('1000000001')).toBeTruthy();
  });
});
