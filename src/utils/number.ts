export const generateListUniqueNumber = (size: number, from = 3, to = 30) => {
  const randomNumbers = new Set<number>();

  while (randomNumbers.size <= size) {
    randomNumbers.add(Math.floor(Math.random() * to + from));
  }

  return Array.from(randomNumbers);
};

export const swap = (array: number[], i: number, j: number) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};
