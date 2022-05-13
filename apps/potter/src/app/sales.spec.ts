import { Sales } from './sales';

describe('Sales', () => {
  let sales: Sales;
  beforeEach(() => {
    sales = new Sales();
  });

  it('should create an instance', () => {
    expect(new Sales()).toBeTruthy();
  });

  test('testBasics', () => {
    expect(sales.price([])).toBe(0);
    expect(sales.price([1])).toBe(8);
    expect(sales.price([2])).toBe(8);
    expect(sales.price([3])).toBe(8);
    expect(sales.price([4])).toBe(8);
    expect(sales.price([1, 1, 1])).toBe(24);
  });
});
