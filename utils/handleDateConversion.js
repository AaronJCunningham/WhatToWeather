export const handleDateConversion = (unixTimestamp) => {
  const time = unixTimestamp * 1000;
  const date = new Date(time);
  return date;
};
