// Numero Integer fra min (incluso) e max (escluso)
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export const isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  console.log(bounding);
  return bounding.top <= 600;
};
