import { flattenAttributes } from '.'
import { isTextSimilarToText } from '.'

/**
 * Method for searching a list of objects where the final attribute in the attribute list is similar to a query string
 *
 * @param items - List of elements on wich the search will be performed
 * @param attributes - List of attibutes to travel before compare the query
 * @param query - text to be compared with the last attibute in the attribute list
 * @returns List of filtered objects
 *
 * @example
 * // Example: Filtering objects where the 'name' attribute matches 'Alice'
 * const items = [
 *   { user: { profile: { name: 'Alice' } } },
 *   { user: { profile: { name: 'Bob' } } }
 * ];
 * const attributes = ['user', 'profile', 'name'];
 * const query = 'Alice';
 *
 * console.log(filterItemsHierarchicallyByQuery(items, attributes, query));
 * // Output: [ { user: { profile: { name: 'Alice' } } } ]
 */
export const filterItemsHierarchicallyByQuery = <T extends object>(
  items: T[],
  attributes: (keyof T)[],
  query: string,
): T[] => {
  if (!attributes.length || !items.length || !query) return []

  return items.filter((item) =>
    matchesQueryInHierarchy(item, attributes, query),
  )
}

/**
 * Method to check if an item attribute value is similar to a query through the hierarchy of it attributes
 *
 * @param {T} item - The object to be evaluated
 * @param {(keyof T)[]} attributes - An array of attribute keys in hierarchical order
 * @param {string} query - The query string to compare with the final attribute value
 * @returns {boolean} - true if the final attribute value matches the query, otherwise false
 *
 * @example
 * // Example of searching for a text in an object where the 'name' attribute is similar to the text 'Alice'
 *
 * item = {
 *   user: {
 *     profile: {
 *       name: 'Alice'
 *     }
 *   }
 * };
 * attributes = ['user', 'profile', 'name'];
 * query = 'Alice';
 *
 * console.log(matchesQueryInHierarchy(item, attributes, query))
 * //output: true;
 *
 * @example
 * // Example of searching for a text in an object where the 'name' attribute is similar to the text 'Oscar'
 *
 * item = {
 *   user: {
 *     profile: {
 *       name: 'Ernesto'
 *     }
 *   }
 * };
 * attributes = ['user', 'profile', 'name'];
 * query = 'Oscar';
 *
 * console.log(matchesQueryInHierarchy(item, attributes, query))
 * //output: false;
 */

export const matchesQueryInHierarchy = <T extends object>(
  item: T,
  attributes: (keyof T)[],
  query: string,
): boolean => {
  if (attributes.length === 0) return false
  let values: T[] = [item]

  for (let i = 0; i < attributes.length - 1; i++) {
    values = flattenAttributes(values, attributes[i])
  }

  return isFinalAttributeMatch(values, attributes[attributes.length - 1], query)
}

/**
 * Method to check if at least one item in a list has an attribute value similar to a given query string.
 *
 * @param {T[]} items - list of objects object to be evaluated
 * @param {keyof T} attribute - attribute to be evaluated
 * @param {string} query - string to compare with the attribute value
 * @returns {boolean} - true if the attribute value is similar to the query, otherwise false
 *
 * @example
 * // Example of checking if any 'name' attribute value is similar to the string 'Alberto'
 *
 * items= [ {id: 1, name: 'Alberto'}, {id: 2, name: 'Luisa'} ]
 * attribute = 'name'
 * query = 'Alber'
 *
 * console.log(isFinalAttributeMatch(items, attribute, query))
 * // output: true
 *
 * @example
 * // Example of checking if any 'name' attribute value is similar to the string 'a'
 *
 * items= [ {id: 1, name: 'Alberto'}, {id: 2, name: 'Luisa'} ]
 * attribute = 'name'
 * query = 'a'
 *
 * console.log(isFinalAttributeMatch(items, attribute, query))
 * // output: true
 */

export const isFinalAttributeMatch = <T extends object>(
  items: T[],
  attribute: keyof T,
  query: string,
): boolean => {
  return items.some((item) =>
    isTextSimilarToText((item[attribute] as string) || '', query),
  )
}
