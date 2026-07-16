export function formatDate(
  value: Date | string,
  locale = "en-IN",
) {
  return new Intl.DateTimeFormat(locale).format(
    new Date(value),
  );
}

export function formatDateTime(
  value: Date | string,
  locale = "en-IN",
) {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}