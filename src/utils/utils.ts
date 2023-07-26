export const mapAndFilter = (
  array: any[],
  filterFunction: (value: any) => boolean,
  mapFunction: (value: any) => any
) => {
  const result = [];
  for (const value of array) {
    const filterResult = filterFunction(value);
    if (filterResult) {
      result.push(mapFunction(value));
    }
  }
  return result;
};
