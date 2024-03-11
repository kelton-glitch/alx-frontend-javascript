export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedGroceries = new Map();
  for (const [item, quantity] of groceries.entries()) {
    if (quantity === 1) {
      updatedGroceries.set(item, 100);
    } else {
      updatedGroceries.set(item, quantity);
    }
  }
  return updatedGroceries;
}
