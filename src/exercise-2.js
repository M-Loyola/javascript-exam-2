const getTheExactNumber = (numbers) => {
  return Math.max(...numbers.filter(number => number % 3 === 0));
}

export default getTheExactNumber;