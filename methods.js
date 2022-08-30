// easy method
const len = (data) => {
  return data.length;
};
const $ = (data) => {
  let element = document.querySelectorAll(data);
  if (len(element) === 1) {
    return element[0];
  };
  return element;
};
//easy Math
const floor = (number) => {
  return Math.floor(number);
};
const ceil = (number) => {
  return Math.ceil(number);
};
const round = (number) => {
  Math.round(number);
};

export { len, $, floor, ceil, round };