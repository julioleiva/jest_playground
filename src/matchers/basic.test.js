import { suma } from '../index';

// Api completa de matchers que admite expect()
//https://jestjs.io/es-ES/docs/expect

test('suma', () => {
  expect(suma(1, 2)).toBe(3);
});

// toBe utiliza Object.is para comprobar la igualdad exacta.
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#when_to_use_jsxrefobject.is_versus_triple_equals)
// Si quieres comprobar el valor de un objeto, utiliza toEqual en su lugar.
// toEqual verifica recursivamente cada campo de un objeto o un array.

test('asignación de objeto', () => {
  const data = { uno: 1 };
  data['dos'] = 2;
  data.tres = 3;
  expect(data).toEqual({ uno: 1, dos: 2, tres: 3 });
});

test('asignación de array', () => {
  const data = [1, 2, 3, 4];
  data[4] = 5;
  data.push(6);
  expect(data).toEqual([1, 2, 3, 4, 5, 6]);
});

//También puedes comprobar lo contrario de que espera el matcher:
test('agregando un numero positivo que no sea 0', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
