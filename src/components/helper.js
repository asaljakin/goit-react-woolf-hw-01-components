export const randomColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215 + 100000)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};

export const randomColorRGBA = opacity => {
  return (
    'rgba(' +
    Math.floor(Math.random() * 255).toString() +
    ',' +
    Math.floor(Math.random() * 255).toString() +
    ',' +
    Math.floor(Math.random() * 255).toString() +
    ',' +
    opacity +
    ')'
  );
};
