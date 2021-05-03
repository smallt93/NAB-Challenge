const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getDayOfWeek = (date) => {
  const getDay = String(date.getDate()).padStart(2, '0');
  return `${weekDay[date.getDay()]} ${getDay}`;
};