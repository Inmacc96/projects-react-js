export const countDuplicatesItemArray = (item, array) => {
  let count = 0;
  array.forEach((arrayValue) => {
    if (arrayValue == item) count++;
  });
  return count;
};

export const removeArrayDuplicates = (array) => {
  return Array.from(new Set(array));
};

export const removeItemArray = (array, item) => {
  const index = array.indexOf(item);

  if (index > -1) {
    array.splice(index, 1);
  }

  return array;
};
