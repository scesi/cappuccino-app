export const flattenAttributes = <T extends object>(
  items: T[],
  attribute: keyof T,
): T[] => {
  return items.flatMap((item) => (item[attribute] as T[]) || item)
}
