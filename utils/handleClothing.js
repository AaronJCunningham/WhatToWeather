export const handleClothing = (temp) => {
  if (temp < 15) {
    return "winter jacket";
  } else if (temp > 15 && temp < 19) {
    return "spring jacket";
  } else if (temp > 19) {
    return "tee shirt";
  }
};
