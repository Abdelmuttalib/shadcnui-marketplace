// const SHORT_DATE_FORMAT_OPTIONS = {
//   month: 'short',
//   day: 'numeric',
// };

// const LONG_DATE_FORMAT_OPTIONS = {
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
//   hour: 'numeric',
//   minute: 'numeric',
// };

export const formatDate = (date: Date | string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};

export const formatShortDate = (date: Date | string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });
};

export function formatDateDayTime(date: Date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = daysOfWeek[date.getDay()]; // Get the day of the week
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0"); // Pad minutes to 2 digits
  const ampm = hours >= 12 ? "pm" : "am"; // Determine AM/PM

  hours = hours % 12 || 12; // Convert 24-hour to 12-hour format, and replace 0 with 12

  return `${day} ${hours}:${minutes}${ampm}`;
}
