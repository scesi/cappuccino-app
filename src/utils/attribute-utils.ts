/**
 * Method to flatten a list of items based on an attribute of the items list.
 *
 * @param items - list of objects
 * @param attribute - existing attribute in the object array
 * @return List of objects contained within each attribute item
 *
 * @example
 * // Example of flattening objects in the items list where the determining attribute is 'ci'.
 * items = [ {id: 1, name: 'Alberto', ci: { number: '115588447', department: 'CBBA' }},
 *          {id: 2, name: 'Luisa', ci: { number: '885577449', department: 'CBBA' }}, ]
 * attribute = 'ci'
 *
 * console.log(flattenAttributes(items, attribute))
 * // output: [ { number: '115588447', department: 'CBBA' },
 * //           {id: 2, name: 'Luisa', ci: { number: '885577449', department: 'CBBA' }} ]
 */

export const flattenAttributes = <T extends object>(
  items: T[],
  attribute: keyof T,
): T[] => {
  return items.flatMap((item) => (item[attribute] as T[]) || item)
}
