export function removeItemFromArray<T>(item: T, array: T[]): T[] {
  const targetIndex = array.indexOf(item);
  return [...array.slice(0, targetIndex), ...array.slice(targetIndex + 1)];
}

export function replaceItemInArray<T>(originalItem: T, replacementItem: T, array: T[]): T[] {
  const targetIndex = array.indexOf(originalItem);
  return [...array.slice(0, targetIndex), replacementItem ,...array.slice(targetIndex + 1)];
}
