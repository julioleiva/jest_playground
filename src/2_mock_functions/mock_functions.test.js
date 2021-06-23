import { forEach } from './index';

describe('forEach function', () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCallback);

  /*   beforeAll(() => {
    jest.clearAllMocks();
  }); */

  /*   afterAll(() => {
    jest.clearAllMocks();
  }); */

  /* beforeEach(() => {
    jest.clearAllMocks();
  }); */

  /*  afterEach(() => {
    jest.clearAllMocks();
  }); */

  it('forEach is a function', () => {
    expect(typeof forEach).toEqual('function');
  });

  it('The mock function was called at least once', () => {
    expect(mockCallback).toHaveBeenCalled();
    //jest.clearAllMocks();
  });

  it('The mock function is called twice', () => {
    expect(mockCallback.mock.calls.length).toBe(2);
  });

  it('The first argument of the first call to the function was 0', () => {
    expect(mockCallback.mock.calls[0][0]).toBe(0);
  });

  it('The first argument of the second call to the function was 1', () => {
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  });

  it('The return value of the first call to the function was 42', () => {
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});
