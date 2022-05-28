function fibonacci(n) {
  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    series[i] = series[i - 2] + series[i - 1];
  }
  return series;
}

console.log(fibonacci(7));
