import { flattenAttributes } from '.'

/**
 * Method to flat a list of objects according to an existing level property in its hierarchy of composition
 *
 * @param {T[]} items - List of elements on wich the search will be performed
 * @param {string[]} attributes - List of attributes thath indicate the hierarchy of properties to traverse before reaching the evaluation term
 * @param {string} level - Property that determine the format of objects in result list
 * @returns {S[]} - Result list
 *
 * @example
 * // Example of extracting items at the 'user' level
 *
 * const items = [
 *   { user: { profile: { name: 'Alice' } } },
 *   { user: { profile: { name: 'Bob' } } }
 * ];
 * const attributes = ['user', 'profile']
 * const level = 'user'
 *
 * console.log(flatItemsHierarchically(items, attributes, level))
 * // output: [{ profile: { name: 'Alice' } }, { profile: { name: 'Bob' } }]
 *
 * @example
 * // Example of extracting items at the 'profile' level
 *
 * const items = [
 *   { user: { profile: { name: 'Alice' } } },
 *   { user: { profile: { name: 'Bob' } } }
 * ];
 * const attributes = ['user', 'profile']
 * const level = 'profile'
 *
 * console.log(flatItemsHierarchically(items, attributes, level))
 * // output: [{ name: 'Alice' }, { name: 'Bob' }]
 */

export const flatItemsHierarchically = <T extends object, S extends T>(
  items: T[],
  attributes: (keyof T)[],
  level: string,
): S[] => {
  if (
    !attributes.includes(level as keyof T) ||
    !attributes.length ||
    !level ||
    !items.length
  )
    return []

  return items.flatMap((item) =>
    extractItemsAtLevel(item, attributes, level),
  ) as S[]
}

/**
 * Method to flat a list of items up to the specified level
 *
 * @param {T} item - The object to be processed.
 * @param {(keyof T)[]} attributes - An array of attribute keys in hierarchical order.
 * @param {string} level - The level at which to extract items.
 * @returns {T[]} - A flattened array of items at the specified level.
 *
 * @example
 * // Example: Extracting items at the 'profile' level
 *
 * const item = {
 *   user: {
 *     profile: {
 *       name: 'Alice'
 *     }
 *   }
 * }
 * const attributes = ['user', 'profile']
 * const level = 'profile'
 *
 * console.log(extractItemsAtLevel(item, attributes, level))
 * // output: [ { name: 'Alice' } ]
 *
 */
const extractItemsAtLevel = <T extends object>(
  item: T,
  attributes: (keyof T)[],
  level: string,
) => {
  let result = [item]

  for (const attribute of attributes) {
    result = flattenAttributes(result, attribute)
    if (attribute === level) break
  }

  return result
}
