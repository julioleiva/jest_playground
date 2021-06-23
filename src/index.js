function add(a, b) {
  return a + b;
}

const unique = (arr) => {
  return [...new Set(arr)];
};

const capitalize = (str) => {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
};

const chunk = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
};

const palindrome = (str) => {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
};

export { add, unique, capitalize, chunk, palindrome };
