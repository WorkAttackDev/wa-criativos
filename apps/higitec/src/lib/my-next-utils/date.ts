export function formatDate(date: string | Date): string {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  };

  return new Intl.DateTimeFormat("pt-BR", options).format(dateObj);
}
