import { sum, sum2 } from './sum';

describe('sum.ts tests', () => {
  it('should return 5 when adding 2 with 3', () => {
    const actualResult = sum(2, 3);
    const expectedResult = 5;
    expect(actualResult).toBe(expectedResult);
  })


  //skriver såhär i verkligheten
  it('should return 14 when adding 10 with 4', () => {
    const result = sum(10, 4);
    expect(result).toBe(14);
  })

  it('should return 9 when multiplying 3 with 3', () => {
    const result = sum2(3, 3);
    expect(result).toBe(9);
  })

  it('should return 49 when multiplying 7 with 7', () => {
    const result = sum2(7, 7);
    expect(result).toBe(49);
  })

  it('should return 150 when multiplying 10 with 15', () => {
    const result = sum2(10, 15);
    expect(result).toBe(150);
  })

});

// npm jest --watchAll to test
