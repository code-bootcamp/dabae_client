export const getDate = (value: string): string => {
  const date: Date = new Date(value);
  const yyyy: string = String(date.getFullYear());
  const mm: string = String(date.getMonth() + 1).padStart(2, "0");
  const dd: string = String(date.getDate()).padStart(2, "0");

  return `${yyyy}.${mm}.${dd}`;
};
