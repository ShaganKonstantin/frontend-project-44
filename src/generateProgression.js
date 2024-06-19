const generateProgression = (start, length, step) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step);
  }
  return result;
};

export default generateProgression;
