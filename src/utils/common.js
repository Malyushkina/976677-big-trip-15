export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getUpperCase = (str) => {
  const str1 = str[0].toUpperCase() + str.substring(1);
  return str1;
};
