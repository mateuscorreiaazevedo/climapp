export default {
  temperature: (value: number|string) => `${value.toString().replace('.', ',')}ºC`,
  windSpeed: (value: number) => (value * 3.6).toPrecision(2)
}
