const getNumberType = (number) => {
  return number <= 0 ? null : (number %2 === 0) ? 'even number' : 'odd number';
};

export default getNumberType;
