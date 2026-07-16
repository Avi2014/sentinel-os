export function formatNumber(value: number) {
  return new Intl.NumberFormat().format(value);
}

export function formatPercent(value: number) {
  return `${value.toFixed(2)}%`;
}

export function clamp(
  value: number,
  min: number,
  max: number,
) {
  return Math.min(Math.max(value, min), max);
}