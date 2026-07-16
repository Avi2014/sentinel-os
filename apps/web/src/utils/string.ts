export function capitalize(value: string) {
  if (!value) return "";

  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function truncate(
  value: string,
  length = 40,
) {
  if (value.length <= length) {
    return value;
  }

  return `${value.slice(0, length)}...`;
}