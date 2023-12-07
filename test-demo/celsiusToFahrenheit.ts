export const celsiusToFahrenheit = (temperatureInCelsius: number) => {
  if (temperatureInCelsius < -273.15) {
    throw ('Temperature is to low');
  }
  return (temperatureInCelsius * 1.8) + 32;
}
