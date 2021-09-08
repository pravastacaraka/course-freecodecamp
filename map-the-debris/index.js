function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map((obj) => ({
    name: obj.name,
    orbitalPeriod: Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM)
    ),
  }));
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
