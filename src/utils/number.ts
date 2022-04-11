export const generateListUniqueNumber = (size: number, from = 2, to = 30) => {
  const randomNumbers = new Set<number>();

  while (randomNumbers.size <= size) {
    randomNumbers.add(Math.floor(Math.random() * to + from));
  }

  return Array.from(randomNumbers);
};
