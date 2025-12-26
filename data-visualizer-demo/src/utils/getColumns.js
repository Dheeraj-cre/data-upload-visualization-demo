export const getColumns = (data) => {
  if (!data || data.length === 0) {
    return { categorical: [], numeric: [] };
  }

  const keys = Object.keys(data[0]);

  const categorical = [];
  const numeric = [];

  keys.forEach((key) => {
    const value = data[0][key];
    if (!isNaN(Number(value))) {
      numeric.push(key);
    } else {
      categorical.push(key);
    }
  });

  return { categorical, numeric };
};
