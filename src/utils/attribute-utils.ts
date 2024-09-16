/**
 * Method to flat a list of items in base of an atribute of the items list
 * @param items - list of objects
 * @param attribute - existing attribute in the object array
 * @return List of objects contained within each attribute item
 *
 * Use examples:
 * items= [ {id: 1, name: 'Alberto', ci: { number: '115588447', department: 'CBBA' }},
 *          {id: 2, name: 'Luisa', ci: { number: '885577449', department: 'CBBA' }}, ]
 * attribute = 'ci'
 * Output: [ { number: '115588447', department: 'CBBA' },
 *          {id: 2, name: 'Luisa', ci: { number: '885577449', department: 'CBBA' }} ]
 */

export const flattenAttributes = <T extends object>(
  items: T[],
  attribute: keyof T,
): T[] => {
  return items.flatMap((item) => (item[attribute] as T[]) || item)
}
