export const getDate = (value: string): string => {
  const date: Date = new Date(value);
  const yyyy: string = String(date.getFullYear());
  const mm: string = String(date.getMonth() + 1).padStart(2, "0");
  const dd: string = String(date.getDate()).padStart(2, "0");

  return `${yyyy}.${mm}.${dd}`;
};

export const getDateKorean = (value: string): string => {
  const date: Date = new Date(value);
  const yyyy: string = String(date.getFullYear());
  const mm: string = String(date.getMonth() + 1).padStart(2, "0");
  const dd: string = String(date.getDate()).padStart(2, "0");

  return `${yyyy}년 ${mm}월 ${dd}일`;
};

export const TimeAmPm = (value: string): string => {
  const date = new Date(value);
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${
    hour < 13
      ? `오전 ${
          hour < 10
            ? `0${hour}:${minute < 10 ? `0${minute}` : minute}`
            : `${hour}:${minute < 10 ? `0${minute}` : minute}`
        }`
      : `오후 ${
          hour - 12 < 10
            ? `0${hour - 12}:${minute < 10 ? `0${minute}` : minute}`
            : `${hour - 12}:${minute < 10 ? `0${minute}` : minute}`
        }`
  }`;
};

export const TimeJustDigit = (value: string): string => {
  const date = new Date(value);
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${
    hour < 13
      ? `${
          hour < 10
            ? `0${hour}:${minute < 10 ? `0${minute}` : minute}`
            : `${hour}:${minute < 10 ? `0${minute}` : minute}`
        }`
      : `${
          hour - 12 < 10
            ? `0${hour - 12}:${minute < 10 ? `0${minute}` : minute}`
            : `${hour - 12}:${minute < 10 ? `0${minute}` : minute}`
        }`
  }`;
};

export const getDateTime = (value: string): string => {
  return `${getDateKorean(value)} ${TimeAmPm(value)}`;
};
