import { celsiusToFahrenheit } from "./celsiusToFahrenheit";

describe('celsiusToFahrenheit.ts tests', () => {

  it('should throe expection when input temperature is lower than -273.15', () => {
    expect(() => celsiusToFahrenheit(-300)).toThrow('Temperature is to low');
  });

  it('should return 86 if input temperature is 30', () => {
    const result = celsiusToFahrenheit(30);
    expect(result).toBe(86);
  });

});
